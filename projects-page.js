/* ── Public Projects Page (Val Atelier layout) ── */
(function () {
  "use strict";

  const PROJECTS_KEY = "bhahaus_projects";
  const esc = (v = "") =>
    (v == null ? "" : String(v)).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));

  const defaultProjects = [
    // ── Finished Work ──
    {
      id: "suraj-reddy-hotel",
      title: "Suraj Reddy Hotel",
      category: "Hospitality",
      status: "finished",
      year: 2025,
      featured: true,
      badge: "FEATURED",
      location: "Hyderabad, Telangana",
      description: "A hospitality project balancing welcoming public spaces, dining and guest experiences with generous natural light and bespoke joinery.",
      cover: "/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Entry Reception Area_Suraj Reddy.png",
      gallery: [
        "/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Dinning and Buffet.png",
        "/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Banquet Hall perspective.png"
      ],
      createdAt: "2025-01-15T00:00:00.000Z"
    },
    {
      id: "kids-playzone",
      title: "M Kids Playzone",
      category: "Interiors",
      status: "finished",
      year: 2025,
      featured: false,
      badge: "",
      location: "Madhapur, Hyderabad",
      description: "An imaginative environment for play, movement and discovery, utilizing tactile wood, curved forms and soft indirect illumination.",
      cover: "/b/M-Kids Playzone_Website upload/3D.png",
      gallery: ["/b/M-Kids Playzone_Website upload/2S.png"],
      createdAt: "2025-01-10T00:00:00.000Z"
    },
    {
      id: "m-office",
      title: "M Office",
      category: "Interiors",
      status: "finished",
      year: 2024,
      featured: true,
      badge: "FEATURED",
      location: "Hyderabad, Telangana",
      description: "A warm, composed office environment shaped around craft, material richness and focused work.",
      cover: "/b/M-Office_For Website Upload/Showcase copy.png",
      gallery: [
        "/b/M-Office_For Website Upload/Front Desk copy.png",
        "/b/M-Office_For Website Upload/Working Area copy.png"
      ],
      createdAt: "2024-06-01T00:00:00.000Z"
    },
    {
      id: "k-flat",
      title: "K Flat — Candeur 40",
      category: "Residential",
      status: "finished",
      year: 2024,
      featured: true,
      badge: "FEATURED",
      location: "Hyderabad, Telangana",
      description: "A layered apartment interior where tailored storage, warm finishes and daily living come together in effortless harmony.",
      cover: "/b/K-Flat Candeur40_For Website_Upload/Living Room_01_Sofa.png",
      gallery: [
        "/b/K-Flat Candeur40_For Website_Upload/Master Bedroom01 .png",
        "/b/K-Flat Candeur40_For Website_Upload/K-FlatKitchen 01.png"
      ],
      createdAt: "2024-04-15T00:00:00.000Z"
    },
    {
      id: "nsl-v-flat",
      title: "NSL V Flat",
      category: "Residential",
      status: "finished",
      year: 2024,
      featured: false,
      badge: "",
      location: "Hyderabad, Telangana",
      description: "A refined private residence focused on comfort, texture and rooms made for everyday rituals.",
      cover: "/b/NSL-V-Flat_Hyderabad_Website Upload/MasterBedroom_NSL_V Flat.png",
      gallery: [],
      createdAt: "2024-02-10T00:00:00.000Z"
    },
    {
      id: "a-office",
      title: "A Office",
      category: "Interiors",
      status: "finished",
      year: 2018,
      featured: false,
      badge: "",
      location: "Hyderabad, Telangana",
      description: "A studio office project bringing clarity, light and a calm professional character to the workplace.",
      cover: "/b/2018 A-Office _Interiors_for Website uplaod/Waiting_Room_A_Office_interiors _2018.png",
      gallery: [
        "/b/2018 A-Office _Interiors_for Website uplaod/Discussion_01Room_A_Office_interiors _2018.png",
        "/b/2018 A-Office _Interiors_for Website uplaod/Discussion_02_A_Office_interiors _2018.png"
      ],
      createdAt: "2018-11-20T00:00:00.000Z"
    },

    // ── Ongoing Work ──
    // ── All 9 existing projects marked as finished ──
    {
      id: "g-house",
      title: "G House",
      category: "Residential",
      status: "finished",
      year: 2026,
      featured: true,
      badge: "",
      location: "Hyderabad, Telangana",
      description: "A contemporary private residence in collaboration with HamaraGhar, exploring sculptural brick, deep overhangs and passive cooling.",
      cover: "/b/Elevation projects/2026/G-House_Collab with HamaraGhar/N21_HG.png",
      gallery: [],
      createdAt: "2026-01-01T00:00:00.000Z"
    },
    {
      id: "l-house",
      title: "L House",
      category: "Residential",
      status: "finished",
      year: 2026,
      featured: false,
      badge: "",
      location: "Hyderabad, Telangana",
      description: "An open-plan courtyard villa engaging with lush greenery and shaded verandahs, designed in collaboration with HamaraGhar.",
      cover: "/b/Elevation projects/2026/L-House_Collab with HamaraGhar/L-House_Perspectice View_Concept_021225.png",
      gallery: [],
      createdAt: "2026-01-02T00:00:00.000Z"
    },
    {
      id: "s-flat-destino",
      title: "S-Flat Destino",
      category: "Residential",
      status: "finished",
      year: 2025,
      featured: false,
      badge: "",
      location: "Hyderabad, Telangana",
      description: "Tailored high-rise residential interiors developed in collaboration with BLH.",
      cover: "/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D1.png",
      gallery: [
        "/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D23.png",
        "/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/mbr2.png",
        "/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/S2.png"
      ],
      createdAt: "2025-02-01T00:00:00.000Z"
    }
  ];

  function fixOutdatedPath(p) {
    if (!p) return p;
    // Ensure all 9 initial studio projects are marked finished
    const initialIds = [
      "suraj-reddy-hotel", "kids-playzone", "m-office", "k-flat",
      "nsl-v-flat", "a-office", "g-house", "l-house", "s-flat-destino"
    ];
    if (initialIds.includes(p.id)) {
      p.status = "finished";
    }
    if (p.badge && (p.badge.includes("EXPECTED") || p.badge.includes("ON THE BOARDS"))) {
      p.badge = "";
    }
    if (p.id === "g-house" || (p.cover && p.cover.includes("G-House"))) {
      p.cover = "/b/Elevation projects/2026/G-House_Collab with HamaraGhar/N21_HG.png";
    }
    if (p.id === "l-house" || (p.cover && p.cover.includes("L-House"))) {
      p.cover = "/b/Elevation projects/2026/L-House_Collab with HamaraGhar/L-House_Perspectice View_Concept_021225.png";
    }
    if (p.id === "s-flat-destino" || (p.cover && p.cover.includes("Destino"))) {
      p.cover = "/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D1.png";
    }
    return p;
  }

  function loadProjects() {
    try {
      const stored = localStorage.getItem(PROJECTS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let changed = false;
          parsed.forEach((p) => {
            const oldCover = p.cover;
            const oldStatus = p.status;
            fixOutdatedPath(p);
            if (p.cover !== oldCover || p.status !== oldStatus) changed = true;
          });
          if (changed) {
            localStorage.setItem(PROJECTS_KEY, JSON.stringify(parsed));
          }
          return parsed;
        }
      }
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(defaultProjects));
      return defaultProjects;
    } catch {
      return defaultProjects;
    }
  }

  // Parse tab from URL (?tab=finished, ?tab=ongoing, or ?tab=conceptual)
  function getTabFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const tab = (params.get("tab") || "finished").toLowerCase();
    if (tab === "ongoing") return "ongoing";
    if (tab === "conceptual") return "conceptual";
    return "finished";
  }

  function setTabInUrl(tab) {
    const url = new URL(window.location);
    url.searchParams.set("tab", tab);
    window.history.replaceState({}, "", url);
  }

  function getCardImage(src) {
    if (!src) return "";
    if (window.BhahausSanity && typeof window.BhahausSanity.getCardImageUrl === "function") {
      return window.BhahausSanity.getCardImageUrl(src);
    }
    return src;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("projects-container");
    if (!container) return;

    let activeTab = getTabFromUrl();
    let activeCategory = "All";
    let allProjects = loadProjects();

    const tabFinishedCount = document.getElementById("tab-finished-count");
    const tabOngoingCount = document.getElementById("tab-ongoing-count");
    const tabConceptualCount = document.getElementById("tab-conceptual-count");

    function updateCounts() {
      const finishedProjects = allProjects.filter((p) => {
        const s = (p.status || "finished").toLowerCase();
        const c = (p.category || "").toLowerCase();
        return s === "finished" && c !== "conceptual";
      });
      const ongoingProjects = allProjects.filter((p) => (p.status || "").toLowerCase() === "ongoing");
      const conceptualProjects = allProjects.filter((p) => {
        const s = (p.status || "").toLowerCase();
        const c = (p.category || "").toLowerCase();
        return s === "conceptual" || c === "conceptual";
      });
      if (tabFinishedCount) tabFinishedCount.textContent = String(finishedProjects.length).padStart(2, "0");
      if (tabOngoingCount) tabOngoingCount.textContent = String(ongoingProjects.length).padStart(2, "0");
      if (tabConceptualCount) tabConceptualCount.textContent = String(conceptualProjects.length).padStart(2, "0");
    }

    updateCounts();

    function render() {
      // 1. Filter by active tab
      const tabList = allProjects.filter((p) => {
        const s = (p.status || "finished").toLowerCase();
        const c = (p.category || "").toLowerCase();
        if (activeTab === "conceptual") {
          return s === "conceptual" || c === "conceptual";
        }
        if (activeTab === "ongoing") {
          return s === "ongoing";
        }
        return s === "finished" && c !== "conceptual";
      });

      // 2. Filter by category
      const filtered = tabList.filter((p) => {
        if (activeCategory === "All") return true;
        const cat = (p.category || "").toLowerCase();
        return cat.includes(activeCategory.toLowerCase());
      });

      if (!filtered.length) {
        let emptyMsg = "No finished projects found for the selected category.";
        if (activeTab === "ongoing") {
          emptyMsg = "No ongoing projects on the boards right now. Check back soon.";
        } else if (activeTab === "conceptual") {
          emptyMsg = "No conceptual projects published yet. Check back soon.";
        }
        container.innerHTML = `<div class="projects-empty">${emptyMsg}</div>`;
        return;
      }

      // Sort projects (newest year first) with no year-wise separation headings
      const sorted = [...filtered].sort((a, b) => {
        const yDiff = Number(b.year || 0) - Number(a.year || 0);
        if (yDiff !== 0) return yDiff;
        return Number(a.sort_order || 100) - Number(b.sort_order || 100);
      });

      let html = `<div class="portfolio-grid">`;
      sorted.forEach((p) => {
        const badgeText = p.badge || (p.featured || p.isFeatured ? "● FEATURED" : "");
        const metaText = `${p.category || "PROJECT"} | ${p.year || ""}`;
        const imgSrc = getCardImage(p.cover || p.image);

        html += `
          <article class="project-card" data-project-id="${esc(p.id)}" tabindex="0" role="button" aria-label="View ${esc(p.title)}">
            <div class="project-card-image">
              <img src="${esc(imgSrc)}" alt="${esc(p.title)}" loading="lazy" decoding="async" />
              ${badgeText ? `<span class="project-card-badge">${esc(badgeText)}</span>` : ""}
            </div>
            <div class="project-card-body">
              <h3>${esc(p.title)}</h3>
              <div class="project-card-meta">${esc(metaText)}</div>
            </div>
          </article>`;
      });
      html += `</div>`;

      container.innerHTML = html;
    }

    // ── Tab switcher ──
    const tabButtons = document.querySelectorAll(".portfolio-tab");
    function updateTabUI() {
      tabButtons.forEach((btn) => {
        const isSelected = btn.dataset.tab === activeTab;
        btn.classList.toggle("active", isSelected);
        btn.setAttribute("aria-selected", String(isSelected));
      });
      render();
    }

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeTab = btn.dataset.tab;
        setTabInUrl(activeTab);
        updateTabUI();
      });
    });

    // ── Category filter switcher ──
    const filterButtons = document.querySelectorAll(".category-filter");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        render();
      });
    });

    // Initial UI render
    updateTabUI();

    // ── Lightbox Detail Modal ──
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="project-lightbox" id="project-lightbox" aria-hidden="true">
        <div class="lightbox-backdrop" data-lb-close></div>
        <div class="lightbox-content">
          <button class="lightbox-close" data-lb-close aria-label="Close project">×</button>
          <div id="lightbox-inner"></div>
        </div>
      </div>
    `
    );

    const lightbox = document.getElementById("project-lightbox");
    const lbInner = document.getElementById("lightbox-inner");

    function openLightbox(id) {
      const p = allProjects.find((x) => x.id === id);
      if (!p) return;

      let galleryHTML = "";
      if (p.gallery && p.gallery.length) {
        galleryHTML = `<div class="lightbox-gallery">${p.gallery
          .map(
            (src) =>
              `<img src="${esc(getCardImage(src))}" alt="${esc(p.title)} — photograph" loading="lazy" decoding="async" />`
          )
          .join("")}</div>`;
      }

      const kickerMeta = [
        (p.category || "PROJECT").toUpperCase(),
        p.year,
        p.location ? p.location.toUpperCase() : ""
      ]
        .filter(Boolean)
        .join("　·　");

      lbInner.innerHTML = `
        <img class="lightbox-cover" src="${esc(getCardImage(p.cover || p.image))}" alt="${esc(p.title)}" />
        <div class="lightbox-body">
          <span class="lb-kicker">${esc(kickerMeta)}</span>
          <h2>${esc(p.title)}</h2>
          ${p.description ? `<p>${esc(p.description)}</p>` : ""}
          ${galleryHTML}
        </div>`;

      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("locked");
    }

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("locked");
    }

    container.addEventListener("click", (e) => {
      const card = e.target.closest("[data-project-id]");
      if (card) openLightbox(card.dataset.projectId);
    });

    container.addEventListener("keydown", (e) => {
      const card = e.target.closest("[data-project-id]");
      if (card && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        openLightbox(card.dataset.projectId);
      }
    });

    lightbox.querySelectorAll("[data-lb-close]").forEach((el) =>
      el.addEventListener("click", closeLightbox)
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });

    // ── Dynamic Sanity CMS Integration ──
    if (window.BhahausSanity && typeof window.BhahausSanity.fetchProjects === "function") {
      try {
        const sanityProjects = await window.BhahausSanity.fetchProjects();
        if (Array.isArray(sanityProjects) && sanityProjects.length > 0) {
          allProjects = sanityProjects;
          updateCounts();
          render();
        }
      } catch (err) {
        console.warn("Projects page Sanity fetch fallback:", err);
      }
    }
  });
})();
