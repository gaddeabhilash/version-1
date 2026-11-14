# BHAHAUS — Architecture & Design Collective

A lightweight, responsive, editorial portfolio website for BHAHAUS. Deploys statically directly to Vercel (or any static host) and connects dynamically to Sanity CMS for headless project content management.

- **Live URL**: `https://bhahaus.vercel.app`
- **Sanity Project ID**: `hry3ao4k`
- **Sanity Dataset**: `production`

---

## 1. Sanity CMS Setup

Project content is managed headlessly via Sanity CMS.

### Local Studio:
```bash
cd studio
npm install
npm run dev
```
Open `http://localhost:3333` to add, edit, or publish projects.

### Deploy Studio to the Web:
```bash
cd studio
npx sanity deploy
```
Choose a hostname (e.g., `bhahaus`). Your studio will be live globally at `https://bhahaus.sanity.studio`.

---

## 2. CORS Origins (Sanity Dashboard)

Ensure the following are added in [manage.sanity.io](https://manage.sanity.io) → Project **hry3ao4k** → **API** → **CORS Origins**:
- `https://vercel.app` (and `https://bhahaus.vercel.app`)
- `http://localhost:3000`
- `http://localhost:5500`

---

## 3. Project Schema Fields

- **Title**: Project name (string, required)
- **Category**: `Residential`, `Interiors`, `Hospitality`, `Commercial` (required)
- **Year**: Year of completion / delivery (string, required)
- **Location**: e.g., *Hyderabad, Telangana*
- **Status**: *Selected Work / Finished* or *Ongoing Work*
- **Main Image**: Primary image with hotspot (serves Hero slider & card thumbnails via Sanity CDN)
- **Gallery Images**: Optional array of photographs for project details
- **Description**: Editorial paragraph describing design intent
- **Is Featured**: Maximum 3 projects appear in the 3-column *Selected Works* section on the homepage
- **Sort Order**: Numeric order (1, 2, 3...)

---

## 4. Deployment

Deploy the root directory directly to Vercel. Static files (`index.html`, `about.html`, `projects.html`, `contact.html`) run with zero build step, and `vercel.json` provides clean URLs. Dynamic project data is fetched client-side directly from Sanity's global CDN API.
