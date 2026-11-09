/* ── BHAHAUS Admin Panel — localStorage-based project management ── */
(function () {
  "use strict";

  /* ── Constants ── */
  const PASSCODE = "123456";
  const SESSION_KEY = "bhahaus_admin_session";
  const PROJECTS_KEY = "bhahaus_projects";

  /* ── Helpers ── */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (v = "") => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const uid = () => crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 9);

  const defaultProjects = [
    {id:"suraj-reddy-hotel",title:"Suraj Reddy Hotel",category:"Hospitality",status:"finished",year:2025,badge:"FEATURED",description:"A hospitality project balancing welcoming public spaces, dining and guest experiences.",cover:"/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Entry Reception Area_Suraj Reddy.png",gallery:["/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Dinning and Buffet.png","/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Banquet Hall perspective.png"],createdAt:"2025-01-15T00:00:00.000Z"},
    {id:"kids-playzone",title:"M Kids Playzone",category:"Interiors",status:"finished",year:2025,badge:"",description:"An imaginative environment for play, movement and discovery.",cover:"/b/M-Kids Playzone_Website upload/3D.png",gallery:["/b/M-Kids Playzone_Website upload/2S.png"],createdAt:"2025-01-10T00:00:00.000Z"},
    {id:"m-office",title:"M Office",category:"Interiors",status:"finished",year:2024,badge:"FEATURED",description:"A warm, composed office environment shaped around craft, material richness and focused work.",cover:"/b/M-Office_For Website Upload/Showcase copy.png",gallery:["/b/M-Office_For Website Upload/Front Desk copy.png","/b/M-Office_For Website Upload/Working Area copy.png"],createdAt:"2024-06-01T00:00:00.000Z"},
    {id:"k-flat",title:"K Flat — Candeur 40",category:"Residential",status:"finished",year:2024,badge:"FEATURED",description:"A layered apartment interior where tailored storage, warm finishes and daily living come together.",cover:"/b/K-Flat Candeur40_For Website_Upload/Living Room_01_Sofa.png",gallery:["/b/K-Flat Candeur40_For Website_Upload/Master Bedroom01 .png","/b/K-Flat Candeur40_For Website_Upload/K-FlatKitchen 01.png"],createdAt:"2024-04-15T00:00:00.000Z"},
    {id:"nsl-v-flat",title:"NSL V Flat",category:"Residential",status:"finished",year:2024,badge:"",description:"A refined private residence focused on comfort, texture and rooms made for everyday rituals.",cover:"/b/NSL-V-Flat_Hyderabad_Website Upload/MasterBedroom_NSL_V Flat.png",gallery:[],createdAt:"2024-02-10T00:00:00.000Z"},
    {id:"a-office",title:"A Office",category:"Interiors",status:"finished",year:2018,badge:"",description:"A studio office project bringing clarity, light and a calm professional character to the workplace.",cover:"/b/2018 A-Office _Interiors_for Website uplaod/Waiting_Room_A_Office_interiors _2018.png",gallery:["/b/2018 A-Office _Interiors_for Website uplaod/Discussion_01Room_A_Office_interiors _2018.png","/b/2018 A-Office _Interiors_for Website uplaod/Discussion_02_A_Office_interiors _2018.png"],createdAt:"2018-11-20T00:00:00.000Z"},
    {id:"g-house",title:"G House",category:"Residential",status:"finished",year:2026,badge:"",description:"A contemporary private residence exploring sculptural brick, deep overhangs and passive cooling.",cover:"/b/Elevation projects/2026/G-House_Collab with HamaraGhar/N21_HG.png",gallery:[],createdAt:"2026-01-01T00:00:00.000Z"},
    {id:"l-house",title:"L House",category:"Residential",status:"finished",year:2026,badge:"",description:"An open-plan courtyard villa engaging with lush greenery and shaded verandahs.",cover:"/b/Elevation projects/2026/L-House_Collab with HamaraGhar/L-House_Perspectice View_Concept_021225.png",gallery:[],createdAt:"2026-01-02T00:00:00.000Z"},
    {id:"s-flat-destino",title:"S-Flat Destino",category:"Residential",status:"finished",year:2025,badge:"",description:"Tailored high-rise residential interiors developed in collaboration with BLH.",cover:"/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D1.png",gallery:[],createdAt:"2025-02-01T00:00:00.000Z"}
  ];

  function fixOutdatedPath(p) {
    if (!p) return p;
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

  /* ── Project storage ── */
  function loadProjects() {
    try {
      const stored = localStorage.getItem(PROJECTS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let changed = false;
          parsed.forEach(p => {
            const old = p.cover;
            fixOutdatedPath(p);
            if (p.cover !== old) changed = true;
          });
          if (changed) localStorage.setItem(PROJECTS_KEY, JSON.stringify(parsed));
          return parsed;
        }
      }
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(defaultProjects));
      return defaultProjects;
    }
    catch { return defaultProjects; }
  }
  function saveProjects(list) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(list));
  }

  /* ── Convert a File to a data-URL (persists in localStorage) ── */
  function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /* ── Session (tab-scoped via sessionStorage) ── */
  function isLoggedIn() {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  }
  function logIn() {
    sessionStorage.setItem(SESSION_KEY, "1");
  }
  function logOut() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  /* ── Boot ── */
  document.addEventListener("DOMContentLoaded", () => {
    if (isLoggedIn()) {
      showAdmin();
    } else {
      showLogin();
    }
  });

  /* ── Login Screen ── */
  function showLogin() {
    $("#login-screen").style.display = "";
    $("#admin-app").style.display = "none";
    setupPinInputs();
    $("#login-form").addEventListener("submit", handleLogin);
  }

  function setupPinInputs() {
    const pins = $$(".pin-box");
    pins.forEach((input, i) => {
      input.value = "";
      input.addEventListener("input", () => {
        if (input.value.length === 1 && i < pins.length - 1) {
          pins[i + 1].focus();
        }
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && i > 0) {
          pins[i - 1].focus();
        }
      });
      input.addEventListener("paste", (e) => {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "").slice(0, 6);
        text.split("").forEach((ch, j) => { if (pins[j]) pins[j].value = ch; });
        const last = Math.min(text.length, pins.length) - 1;
        if (last >= 0) pins[last].focus();
      });
    });
    if (pins[0]) pins[0].focus();
  }

  function handleLogin(e) {
    e.preventDefault();
    const code = $$(".pin-box").map(b => b.value).join("");
    if (code === PASSCODE) {
      logIn();
      showAdmin();
    } else {
      $("#login-error").textContent = "Incorrect passcode. Try again.";
      $$(".pin-box").forEach(b => { b.value = ""; });
      $$(".pin-box")[0]?.focus();
    }
  }

  /* ── Admin Panel ── */
  let editingId = null;
  let currentCoverDataURL = null;      // data-URL for new cover
  let currentGalleryDataURLs = [];     // data-URLs for new gallery images
  let existingGallery = [];            // existing gallery entries when editing

  function showAdmin() {
    $("#login-screen").style.display = "none";
    $("#admin-app").style.display = "";
    renderProjectList();
    setupForm();
    $("#logout-btn").addEventListener("click", () => {
      logOut();
      location.reload();
    });
  }

  function setupForm() {
    const form = $("#project-form");
    form.addEventListener("submit", handleSave);
    $("#cancel-btn").addEventListener("click", resetForm);

    // Cover preview
    $("#field-cover").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      currentCoverDataURL = await fileToDataURL(file);
      renderCoverPreview(currentCoverDataURL);
    });

    // Gallery preview
    $("#field-gallery").addEventListener("change", async (e) => {
      const files = Array.from(e.target.files);
      for (const file of files) {
        const url = await fileToDataURL(file);
        currentGalleryDataURLs.push(url);
      }
      renderGalleryPreview();
    });
  }

  function renderCoverPreview(src) {
    const el = $("#cover-preview");
    el.innerHTML = src ? `<img src="${esc(src)}" alt="Cover preview" />` : "";
  }

  function renderGalleryPreview() {
    const el = $("#gallery-preview");
    const all = [...existingGallery, ...currentGalleryDataURLs];
    el.innerHTML = all.map((src, i) =>
      `<div class="gallery-thumb-wrap">
        <img src="${esc(src)}" alt="Gallery photo ${i + 1}" />
        <button type="button" class="remove-gallery-img" data-gallery-index="${i}">×</button>
      </div>`
    ).join("");
    el.querySelectorAll(".remove-gallery-img").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.galleryIndex, 10);
        if (idx < existingGallery.length) {
          existingGallery.splice(idx, 1);
        } else {
          currentGalleryDataURLs.splice(idx - existingGallery.length, 1);
        }
        renderGalleryPreview();
      });
    });
  }

  async function handleSave(e) {
    e.preventDefault();
    const projects = loadProjects();
    const title = $("#field-title").value.trim();
    const year = parseInt($("#field-year").value, 10);
    const description = $("#field-description").value.trim();
    const status = $("#field-status") ? $("#field-status").value : "finished";
    const category = $("#field-category") ? $("#field-category").value : "Residential";
    const badge = $("#field-badge") ? $("#field-badge").value.trim() : "";

    if (!title) { showFormMsg("Project name is required.", true); return; }
    if (!year || year < 1900 || year > 2099) { showFormMsg("Enter a valid 4-digit year.", true); return; }

    if (editingId) {
      // Editing existing
      const idx = projects.findIndex(p => p.id === editingId);
      if (idx === -1) { showFormMsg("Project not found.", true); return; }
      projects[idx].title = title;
      projects[idx].year = year;
      projects[idx].status = status;
      projects[idx].category = category;
      projects[idx].badge = badge;
      projects[idx].description = description;
      if (currentCoverDataURL) {
        projects[idx].cover = currentCoverDataURL;
      }
      projects[idx].gallery = [...existingGallery, ...currentGalleryDataURLs];
      saveProjects(projects);
      showFormMsg("Project updated successfully.");
      resetForm();
    } else {
      // New project
      let cover = currentCoverDataURL;
      if (!cover) { showFormMsg("Please select a cover photo.", true); return; }
      const project = {
        id: uid(),
        title,
        year,
        status,
        category,
        badge,
        description,
        cover,
        gallery: [...currentGalleryDataURLs],
        createdAt: new Date().toISOString()
      };
      projects.push(project);
      saveProjects(projects);
      showFormMsg("Project added to the portfolio.");
      resetForm();
    }
    renderProjectList();
  }

  function resetForm() {
    editingId = null;
    currentCoverDataURL = null;
    currentGalleryDataURLs = [];
    existingGallery = [];
    $("#project-form").reset();
    $("#field-id").value = "";
    $("#form-heading").textContent = "Add a new project";
    $("#submit-btn").textContent = "Add project →";
    $("#cancel-btn").style.display = "none";
    $("#cover-preview").innerHTML = "";
    $("#gallery-preview").innerHTML = "";
  }

  function loadForEdit(id) {
    const projects = loadProjects();
    const p = projects.find(x => x.id === id);
    if (!p) return;

    editingId = id;
    currentCoverDataURL = null;
    currentGalleryDataURLs = [];
    existingGallery = [...(p.gallery || [])];

    $("#field-id").value = p.id;
    $("#field-title").value = p.title;
    $("#field-year").value = p.year;
    if ($("#field-status")) $("#field-status").value = p.status || "finished";
    if ($("#field-category")) $("#field-category").value = p.category || "Residential";
    if ($("#field-badge")) $("#field-badge").value = p.badge || "";
    $("#field-description").value = p.description || "";
    $("#field-cover").value = "";
    $("#field-gallery").value = "";

    renderCoverPreview(p.cover);
    renderGalleryPreview();

    $("#form-heading").textContent = "Edit project";
    $("#submit-btn").textContent = "Save changes →";
    $("#cancel-btn").style.display = "";
    
    // Scroll to form
    $("#form-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function deleteProject(id) {
    const projects = loadProjects();
    const p = projects.find(x => x.id === id);
    if (!p) return;
    if (!confirm(`Remove "${p.title}" from the portfolio?`)) return;
    const updated = projects.filter(x => x.id !== id);
    saveProjects(updated);
    if (editingId === id) resetForm();
    renderProjectList();
  }

  function renderProjectList() {
    const projects = loadProjects();
    const count = projects.length;
    $("#project-count").textContent = `${count} project${count === 1 ? "" : "s"}`;

    if (!count) {
      $("#project-list").innerHTML = `<div class="empty-list">No projects yet. Add your first one above.</div>`;
      return;
    }

    // Sort by year desc, then by creation date desc
    const sorted = [...projects].sort((a, b) => b.year - a.year || new Date(b.createdAt) - new Date(a.createdAt));

    $("#project-list").innerHTML = sorted.map(p => `
      <div class="admin-project-item">
        <img class="admin-thumb" src="${esc(p.cover)}" alt="${esc(p.title)}" />
        <div class="admin-project-info">
          <h3>${esc(p.title)}</h3>
          <span>${esc(p.year)}${p.description ? " · " + esc(p.description.slice(0, 60)) + (p.description.length > 60 ? "…" : "") : ""}</span>
        </div>
        <div class="admin-project-actions">
          <button data-edit="${esc(p.id)}">Edit</button>
          <button class="delete-btn" data-del="${esc(p.id)}">Delete</button>
        </div>
      </div>
    `).join("");

    $$("[data-edit]", $("#project-list")).forEach(btn =>
      btn.addEventListener("click", () => loadForEdit(btn.dataset.edit))
    );
    $$("[data-del]", $("#project-list")).forEach(btn =>
      btn.addEventListener("click", () => deleteProject(btn.dataset.del))
    );
  }

  function showFormMsg(text, isError = false) {
    const el = $("#form-message");
    el.textContent = text;
    el.className = "form-message" + (isError ? " error" : "");
    if (!isError) setTimeout(() => { el.textContent = ""; }, 3500);
  }
})();

