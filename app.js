const legacyDemoProjects = [
  { id:"demo-1", title:"The Courtyard House", category:"Residential", location:"Jubilee Hills, Hyderabad", year:"2025", description:"A quiet home organized around an open-to-sky garden. A generous verandah softens the passage between inside and out, while locally sourced stone settles the house into the dry, rocky landscape.", image:"https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1450&q=85", gallery:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1150&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1150&q=85"], featured:true, sort_order:1 },
  { id:"demo-2", title:"A House in the Palms", category:"Residential", location:"Alibaug, Maharashtra", year:"2024", description:"A weekend home that follows the rhythm of its coastal setting. Deep shade, lime-plastered walls and a sheltered garden make a generous place to gather, in every season.", image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1450&q=85", gallery:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1150&q=85"], featured:false, sort_order:2 },
  { id:"demo-3", title:"Serein House", category:"Interiors", location:"Banjara Hills, Hyderabad", year:"2024", description:"A considered renovation built around natural materials and a softer pace. Tactile oak, pale stone and low, warm light give this family home a sense of calm without taking the character out of it.", image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1450&q=85", gallery:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1150&q=85"], featured:false, sort_order:3 },
  { id:"demo-4", title:"Morrow Retreat", category:"Hospitality", location:"Coonoor, Tamil Nadu", year:"2023", description:"A small retreat set into a green hillside. Long rooflines rest gently above the tea gardens, creating a cluster of simple, light-filled places to stay and wander.", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1450&q=85", gallery:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1150&q=85"], featured:true, sort_order:4 },
  { id:"demo-5", title:"Rasa — The Listening Room", category:"Interiors", location:"Panjagutta, Hyderabad", year:"2022", description:"A listening bar shaped around acoustic stillness and close conversation. Walnut joinery, soft walls and a low, amber glow set the scene for an evening that asks nothing more than to be enjoyed.", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1450&q=85", gallery:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1150&q=85"], featured:false, sort_order:5 },
  { id:"demo-6", title:"Palm House No. 04", category:"Residential", location:"Bengaluru, Karnataka", year:"2022", description:"A compact family home shaped by a large old palm. Shallow terraces, filtered light and a close relationship to the courtyard make a small urban plot feel expansive.", image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1450&q=85", gallery:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1150&q=85"], featured:false, sort_order:6 }
];
const demoProjects = [
  {
    id: "suraj-reddy-hotel",
    title: "Suraj Reddy Hotel",
    category: "Hospitality",
    location: "Hyderabad, Telangana",
    year: "2025",
    description: "A hospitality project balancing welcoming public spaces, dining and guest experiences.",
    image: "/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Entry Reception Area_Suraj Reddy.png",
    gallery: [
      "/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Dinning and Buffet.png",
      "/b/HOTEL projects/Suraj Reddy Hotel_Website upload/Banquet Hall perspective.png"
    ],
    featured: true,
    sort_order: 1
  },
  {
    id: "k-flat",
    title: "K Flat — Candeur 40",
    category: "Residential",
    location: "Hyderabad, Telangana",
    year: "2024",
    description: "A layered apartment interior where tailored storage, warm finishes and daily living come together.",
    image: "/b/K-Flat Candeur40_For Website_Upload/Living Room_01_Sofa.png",
    gallery: [
      "/b/K-Flat Candeur40_For Website_Upload/Master Bedroom01 .png",
      "/b/K-Flat Candeur40_For Website_Upload/K-FlatKitchen 01.png"
    ],
    featured: true,
    sort_order: 2
  },
  {
    id: "m-office",
    title: "M Office",
    category: "Interiors",
    location: "Hyderabad, Telangana",
    year: "2024",
    description: "A warm, composed office environment shaped around craft, material richness and focused work.",
    image: "/b/M-Office_For Website Upload/Showcase copy.png",
    gallery: [
      "/b/M-Office_For Website Upload/Front Desk copy.png",
      "/b/M-Office_For Website Upload/Working Area copy.png"
    ],
    featured: true,
    sort_order: 3
  },
  {
    id: "g-house",
    title: "G House",
    category: "Residential",
    location: "Hyderabad, Telangana",
    year: "2026",
    description: "A contemporary private residence exploring sculptural brick, deep overhangs and passive cooling.",
    image: "/b/Elevation projects/2026/G-House_Collab with HamaraGhar/N21_HG.png",
    gallery: [],
    featured: false,
    sort_order: 4
  },
  {
    id: "l-house",
    title: "L House",
    category: "Residential",
    location: "Hyderabad, Telangana",
    year: "2026",
    description: "An open-plan courtyard villa engaging with lush greenery and shaded verandahs.",
    image: "/b/Elevation projects/2026/L-House_Collab with HamaraGhar/L-House_Perspectice View_Concept_021225.png",
    gallery: [],
    featured: false,
    sort_order: 5
  },
  {
    id: "s-flat-destino",
    title: "S-Flat Destino",
    category: "Residential",
    location: "Hyderabad, Telangana",
    year: "2025",
    description: "Tailored high-rise residential interiors developed in collaboration with BLH.",
    image: "/b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D1.png",
    gallery: [],
    featured: false,
    sort_order: 6
  },
  {
    id: "kids-playzone",
    title: "M Kids Playzone",
    category: "Interiors",
    location: "Madhapur, Hyderabad",
    year: "2025",
    description: "An imaginative environment for play, movement and discovery.",
    image: "/b/M-Kids Playzone_Website upload/3D.png",
    gallery: ["/b/M-Kids Playzone_Website upload/2S.png"],
    featured: false,
    sort_order: 7
  },
  {
    id: "nsl-v-flat",
    title: "NSL V Flat",
    category: "Residential",
    location: "Hyderabad, Telangana",
    year: "2024",
    description: "A refined private residence focused on comfort, texture and rooms made for everyday rituals.",
    image: "/b/NSL-V-Flat_Hyderabad_Website Upload/MasterBedroom_NSL_V Flat.png",
    gallery: [],
    featured: false,
    sort_order: 8
  },
  {
    id: "a-office",
    title: "A Office",
    category: "Interiors",
    location: "Hyderabad, Telangana",
    year: "2018",
    description: "A studio office project bringing clarity, light and a calm professional character to the workplace.",
    image: "/b/2018 A-Office _Interiors_for Website uplaod/Waiting_Room_A_Office_interiors _2018.png",
    gallery: [
      "/b/2018 A-Office _Interiors_for Website uplaod/Discussion_01Room_A_Office_interiors _2018.png",
      "/b/2018 A-Office _Interiors_for Website uplaod/Discussion_02_A_Office_interiors _2018.png"
    ],
    featured: false,
    sort_order: 9
  }
];
let projects = [...demoProjects];
let activeFilter = "All";
let supabase = null;
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const escapeHTML = (value="") => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
const safeImage = (value="") => { try { const u=new URL(value, location.href); return ["http:","https:","data:"].includes(u.protocol) ? u.href : ""; } catch { return ""; } };
const niceCount = n => String(n).padStart(2,"0");
function visibleProjects(){return projects.filter(p=>activeFilter==="All"||p.category===activeFilter).sort((a,b)=>Number(a.sort_order||0)-Number(b.sort_order||0));}
function renderOurProjects(){
  const container = $("#our-projects-grid");
  if(!container) return;
  // Pick exactly 3 projects (prefer featured or first 3)
  const three = projects.slice(0, 3);
  container.innerHTML = three.map(p => `
    <article class="op-card" tabindex="0" data-project="${escapeHTML(p.id)}" aria-label="View ${escapeHTML(p.title)}">
      <div class="op-card-img-wrap">
        <img class="op-card-img" src="${escapeHTML(safeImage(p.image||p.cover))}" alt="${escapeHTML(p.title)}" loading="lazy" />
        ${p.featured ? `<span class="op-card-badge">● FEATURED</span>` : ""}
      </div>
      <div class="op-card-info">
        <h3>${escapeHTML(p.title)}</h3>
        <span>${escapeHTML((p.category||"PROJECT").toUpperCase())}${p.year ? " | " + escapeHTML(p.year) : ""}</span>
      </div>
    </article>
  `).join("");
}
function renderProjects(){
  const grid = $("#project-grid");
  if (!grid) return;
  const list=visibleProjects();
  const countEl = $("#project-count");
  if (countEl) countEl.textContent=niceCount(projects.length);
  grid.innerHTML=list.length?list.map((p,i)=>`<article class="project-card" tabindex="0" data-project="${escapeHTML(p.id)}" aria-label="View ${escapeHTML(p.title)}"><div class="project-image"><img src="${escapeHTML(safeImage(p.image||p.cover))}" alt="${escapeHTML(p.title)}" loading="lazy" /><span class="image-number">${niceCount(i+1)} — ${escapeHTML((p.category||"PROJECT").toUpperCase())}</span><span class="image-arrow">↗</span></div><div class="project-info"><h3>${escapeHTML(p.title)}</h3><span>${escapeHTML(p.year)}</span></div><div class="project-meta"><span>${escapeHTML(p.location||"")}</span><span>${p.featured?"SELECTED PROJECT":""}</span></div></article>`).join(""):`<div class="empty">No projects in this collection yet. Check back soon.</div>`;
}
function openProject(id){const p=projects.find(x=>x.id===id);if(!p)return;$("#project-detail-content").innerHTML=`<img class="detail-image" src="${escapeHTML(safeImage(p.image||p.cover))}" alt="${escapeHTML(p.title)}"/><div class="detail-body"><span class="eyebrow">${escapeHTML((p.category||"PROJECT").toUpperCase())}　·　${escapeHTML(p.year)}${p.location?"　·　"+escapeHTML(p.location.toUpperCase()):""}</span><h2>${escapeHTML(p.title)}</h2><p>${escapeHTML(p.description)}</p>${p.gallery?.length?`<div class="detail-gallery">${p.gallery.map(img=>`<img src="${escapeHTML(safeImage(img))}" alt="${escapeHTML(p.title)} — project photograph" loading="lazy"/>`).join("")}</div>`:""}</div>`;toggleOverlay("#project-modal",true);}
function toggleOverlay(id,open){$(id).classList.toggle("open",open);$(id).setAttribute("aria-hidden",String(!open));document.body.classList.toggle("locked",open||$("#project-modal").classList.contains("open"));}
function toast(message){const el=document.createElement("div");el.className="toast";el.textContent=message;document.body.append(el);setTimeout(()=>el.remove(),2600);}
document.addEventListener("DOMContentLoaded",async()=>{
  const siteMenu=$("#site-menu");
  const menuToggle=$("#menu-toggle");
  const setMenu=(open)=>{siteMenu.classList.toggle("open",open);siteMenu.setAttribute("aria-hidden",String(!open));menuToggle.setAttribute("aria-expanded",String(open));document.body.classList.toggle("locked",open||$("#project-modal").classList.contains("open"));};
  menuToggle.addEventListener("click",()=>setMenu(!siteMenu.classList.contains("open")));
  $$('[data-menu-close]').forEach(item=>item.addEventListener("click",()=>setMenu(false)));

  // Merge admin-managed projects from localStorage without duplicating
  try {
    const stored = JSON.parse(localStorage.getItem("bhahaus_projects") || "[]");
    if (Array.isArray(stored) && stored.length) {
      const map = new Map();
      demoProjects.forEach(p => map.set(p.id, { ...p }));
      stored.forEach((p, i) => {
        const existing = map.get(p.id);
        map.set(p.id, {
          id: p.id,
          title: p.title || (existing && existing.title) || "",
          category: p.category || (existing && existing.category) || "Residential",
          location: p.location || (existing && existing.location) || "Hyderabad, Telangana",
          year: String(p.year || (existing && existing.year) || ""),
          description: p.description || (existing && existing.description) || "",
          image: p.cover || p.image || (existing && (existing.image || existing.cover)) || "",
          gallery: p.gallery || (existing && existing.gallery) || [],
          featured: p.featured !== undefined ? Boolean(p.featured) : (existing ? existing.featured : false),
          sort_order: existing ? existing.sort_order : (100 + i)
        });
      });
      projects = Array.from(map.values()).sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0));
    }
  } catch (err) {
    console.warn("Could not parse stored projects", err);
  }

  let heroIndex=0;
  const renderHero=()=>{
    const p=projects[heroIndex];
    if(!p)return;
    const imgSrc = safeImage(p.image || p.cover);
    $("#hero-photo").style.setProperty("background-image",`linear-gradient(0deg, rgba(21,23,12,.62), rgba(21,23,12,.05) 62%), url(\"${imgSrc}\")`,`important`);
    $("#hero-photo").setAttribute("aria-label",`${p.title}, ${p.category||""}, ${p.location||""}`);
    $("#hero-number").textContent=`${niceCount(heroIndex+1)} — ${niceCount(projects.length)}`;
    $("#hero-title").textContent=p.title;
    $("#hero-meta").textContent=`${(p.category||"PROJECT").toUpperCase()} · ${p.year}`;
  };
  $("#hero-prev").addEventListener("click",()=>{heroIndex=(heroIndex-1+projects.length)%projects.length;renderHero();});
  $("#hero-next").addEventListener("click",()=>{heroIndex=(heroIndex+1)%projects.length;renderHero();});
  $$(".filter").forEach(button=>button.addEventListener("click",()=>{$$(".filter").forEach(b=>b.classList.remove("active"));button.classList.add("active");activeFilter=button.dataset.filter;renderProjects();}));
  const pGrid = $("#project-grid");
  if (pGrid) {
    pGrid.addEventListener("click",event=>{const card=event.target.closest("[data-project]");if(card)openProject(card.dataset.project);});
    pGrid.addEventListener("keydown",event=>{const card=event.target.closest("[data-project]");if(card&&(event.key==="Enter"||event.key===" ")){event.preventDefault();openProject(card.dataset.project);}});
  }
  $$('[data-close]').forEach(button=>button.addEventListener("click",()=>toggleOverlay("#project-modal",false)));
  document.addEventListener("keydown",event=>{if(event.key==="Escape"){setMenu(false);toggleOverlay("#project-modal",false);}});
  renderProjects();
  renderOurProjects();
  renderHero();
  const opGrid = $("#our-projects-grid");
  if(opGrid){
    opGrid.addEventListener("click",event=>{const card=event.target.closest("[data-project]");if(card)openProject(card.dataset.project);});
    opGrid.addEventListener("keydown",event=>{const card=event.target.closest("[data-project]");if(card&&(event.key==="Enter"||event.key===" ")){event.preventDefault();openProject(card.dataset.project);}});
  }
  const whatsAppButton=$(".whatsapp-float");
  const hero=$(".hero");
  const updateWhatsAppVisibility=()=>{
    if(!whatsAppButton||!hero)return;
    const trigger=hero.offsetTop+(hero.offsetHeight/2);
    whatsAppButton.classList.toggle("is-hidden",window.scrollY<trigger);
  };
  window.addEventListener("scroll",updateWhatsAppVisibility,{passive:true});
  window.addEventListener("resize",updateWhatsAppVisibility);
  updateWhatsAppVisibility();
  const config=window.BHAHAUS_CONFIG||{};
  if(config.supabaseUrl&&config.supabaseAnonKey){try{const{createClient}=await import("https://esm.sh/@supabase/supabase-js@2");supabase=createClient(config.supabaseUrl,config.supabaseAnonKey);const{data,error}=await supabase.from("projects").select("*").order("sort_order",{ascending:true}).order("created_at",{ascending:false});if(!error&&data){projects=data;renderProjects();renderHero();}}catch(error){console.error("Supabase could not be initialized:",error);}}
});
