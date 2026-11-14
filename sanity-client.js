/* ─────────────────────────────────────────────────────────────
 * BHAHAUS — Sanity CMS Client (Vanilla JS & GROQ)
 * Project ID: hry3ao4k
 * Dataset: production
 * ──────────────────────────────────────────────────────────── */
(function (global) {
  "use strict";

  const SANITY_CONFIG = {
    projectId: "hry3ao4k",
    dataset: "production",
    apiVersion: "v2024-03-01",
    useCdn: false, // Set to false so new studio additions appear immediately without CDN caching delay
  };

  /**
   * Optimized Sanity Image URL Generator
   * Appends auto=format, quality, and width parameters to Sanity CDN URLs
   */
  function optimizeSanityImage(url, opts = {}) {
    if (!url || typeof url !== "string") return "";
    // Only alter Sanity CDN URLs
    if (url.includes("cdn.sanity.io")) {
      try {
        const u = new URL(url);
        if (opts.auto !== false) u.searchParams.set("auto", "format");
        if (opts.q) u.searchParams.set("q", String(opts.q));
        if (opts.w) u.searchParams.set("w", String(opts.w));
        if (opts.fit) u.searchParams.set("fit", opts.fit);
        return u.toString();
      } catch {
        return url;
      }
    }
    return url;
  }

  function getHeroImageUrl(url) {
    return optimizeSanityImage(url, { auto: true, q: 80, w: 1920, fit: "max" });
  }

  function getCardImageUrl(url) {
    return optimizeSanityImage(url, { auto: true, q: 80, w: 800 });
  }

  const GROQ_QUERY = `*[_type == "project"] | order(coalesce(sortOrder, 100) asc, year desc, _createdAt desc) {
    _id,
    title,
    category,
    year,
    location,
    description,
    status,
    isFeatured,
    sortOrder,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url
  }`;

  /**
   * Fetch all projects from Sanity public HTTP API
   * Returns an array of mapped projects or null if empty / error
   */
  async function fetchSanityProjects() {
    try {
      const apiVer = SANITY_CONFIG.apiVersion.startsWith("v")
        ? SANITY_CONFIG.apiVersion
        : `v${SANITY_CONFIG.apiVersion}`;
      const host = SANITY_CONFIG.useCdn ? "apicdn.sanity.io" : "api.sanity.io";
      const endpoint = `https://${SANITY_CONFIG.projectId}.${host}/${apiVer}/data/query/${SANITY_CONFIG.dataset}?query=${encodeURIComponent(GROQ_QUERY)}`;
      const res = await fetch(endpoint, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        console.warn(`Sanity API responded with status ${res.status}`);
        return null;
      }
      const data = await res.json();
      if (!data || !Array.isArray(data.result) || data.result.length === 0) {
        return null;
      }

      return data.result.map((doc, idx) => ({
        id: doc._id || `sanity-${idx}`,
        title: doc.title || "Untitled Project",
        category: doc.category || "Residential",
        location: doc.location || "Hyderabad, Telangana",
        year: String(doc.year || ""),
        description: doc.description || "",
        status: (doc.status || "finished").toLowerCase(),
        featured: Boolean(doc.isFeatured),
        isFeatured: Boolean(doc.isFeatured),
        image: doc.mainImage || "",
        cover: doc.mainImage || "",
        gallery: Array.isArray(doc.gallery) ? doc.gallery.filter(Boolean) : [],
        sort_order: typeof doc.sortOrder === "number" ? doc.sortOrder : idx + 1,
      }));
    } catch (err) {
      console.warn("Could not fetch projects from Sanity CMS (check CORS in Sanity dashboard):", err);
      return null;
    }
  }

  // Expose to window
  global.BhahausSanity = {
    config: SANITY_CONFIG,
    fetchProjects: fetchSanityProjects,
    optimizeImage: optimizeSanityImage,
    getHeroImageUrl: getHeroImageUrl,
    getCardImageUrl: getCardImageUrl,
  };
})(typeof window !== "undefined" ? window : globalThis);

