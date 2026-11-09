document.addEventListener("DOMContentLoaded",()=>{
  const header=document.querySelector(".page-head");
  if(!header)return;
  const headerBrand=header.querySelector(".brand");
  if(headerBrand){
    headerBrand.innerHTML=`<img class="page-brand-logo" src="/Bhahaus%20Logo/Bhahaus_Architect%2001Logo-header.png?v=1" alt="Bhahaus" width="145" height="39" decoding="sync"><span class="page-brand-tagline">A DESIGN COLLECTIVE</span>`;
  }
  const whatsAppIcon=`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.14 12.39 9.74 14.86 12.19 15.92C14.23 16.8 14.65 16.63 15.1 16.59C15.55 16.55 16.55 15.99 16.76 15.41C16.96 14.83 16.96 14.33 16.9 14.23C16.84 14.13 16.68 14.07 16.44 13.95C16.2 13.83 15.02 13.25 14.8 13.17C14.58 13.09 14.42 13.05 14.26 13.29C14.1 13.53 13.64 14.07 13.5 14.23C13.36 14.39 13.22 14.41 12.98 14.29C12.74 14.17 11.97 13.92 11.06 13.11C10.35 12.48 9.87 11.7 9.75 11.46C9.63 11.22 9.74 11.09 9.86 10.97C9.97 10.86 10.1 10.68 10.22 10.54C10.34 10.4 10.38 10.3 10.46 10.14C10.54 9.98 10.5 9.84 10.44 9.72C10.38 9.6 9.92 8.46 9.73 7.99C9.54 7.54 9.35 7.6 9.2 7.59C9.06 7.58 8.9 7.58 8.74 7.58L8.53 7.33Z"/></svg>`;
  const waUrl = (window.STUDIO_CONFIG && window.STUDIO_CONFIG.whatsappUrl) || "https://wa.me/919121045551";

  header.insertAdjacentHTML("beforeend",`<button class="mobile-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>`);
  document.body.insertAdjacentHTML("beforeend",`<aside class="mobile-menu" aria-hidden="true"><div class="mobile-menu-inner"><div class="mobile-menu-top"><a class="brand" href="/" aria-label="BHAHAUS"><img class="page-brand-logo" src="/Bhahaus%20Logo/bhahaus-logo-white-web.png" alt="Bhahaus" width="130" height="35"><span class="page-brand-tagline" style="color:#a6a39a">A DESIGN COLLECTIVE</span></a><button class="mobile-menu-close" data-mobile-close aria-label="Close menu">×</button></div><nav><a href="/" data-mobile-close>Home</a><a href="/about.html" data-mobile-close>About</a><a href="/projects.html" data-mobile-close>Projects</a><a href="/contact.html" data-mobile-close>Contact</a></nav><a class="page-menu-whatsapp" href="${waUrl}" target="_blank" rel="noopener">${whatsAppIcon} WHATSAPP US</a></div></aside>`);
  const button=document.querySelector(".mobile-toggle");
  const menu=document.querySelector(".mobile-menu");
  const setOpen=open=>{menu.classList.toggle("open",open);button.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-hidden",String(!open));document.body.classList.toggle("locked",open);};
  if(button && menu){
    button.addEventListener("click",()=>setOpen(!menu.classList.contains("open")));
    menu.querySelectorAll("[data-mobile-close]").forEach(el=>el.addEventListener("click",()=>setOpen(false)));
  }
  document.addEventListener("keydown",event=>{if(event.key==="Escape")setOpen(false);});
  const current=location.pathname.replace(/\/$/,"")||"/";
  if(menu){
    menu.querySelectorAll("nav a").forEach(link=>{const target=new URL(link.href).pathname.replace(/\/$/,"")||"/";if(target===current)link.classList.add("active");});
  }
});
