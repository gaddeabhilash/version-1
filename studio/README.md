# BHAHAUS — Sanity Studio

Sanity CMS Studio configured for BHAHAUS Architecture & Design Collective.

- **Project ID**: `hry3ao4k`
- **Dataset**: `production`

---

## 1. Quick Start Locally

From this directory (`/studio`):

```bash
cd studio
npm install
npm run dev
```

Your Studio will be running at `http://localhost:3333`.

---

## 2. Deploy Studio to the Web (`bhahaus.sanity.studio`)

To deploy this Studio globally so your team can edit projects from any browser:

```bash
cd studio
npx sanity deploy
```

When prompted, pick your desired studio hostname (e.g. `bhahaus`). Your Studio will be accessible at:
`https://bhahaus.sanity.studio`

---

## 3. Important: Ensure CORS Origins Are Added in Sanity Dashboard

Go to [manage.sanity.io](https://manage.sanity.io) → Select project **hry3ao4k** → **API** → **CORS Origins**:

Add the following origins (with credentials enabled):
- `https://vercel.app` (or your exact production domain `https://bhahaus.vercel.app`)
- `http://localhost:3000`
- `http://localhost:5500`
- `http://localhost:3456`

---

## 4. Project Document Schema

Each project has:
- **Title**: Project name (e.g. *Suraj Reddy Hotel*)
- **Category**: `Residential`, `Interiors`, `Hospitality`, `Commercial`
- **Year**: e.g. *2025*, *2024*, *2026*
- **Location**: e.g. *Hyderabad, Telangana*
- **Status**: *Selected Work / Finished* or *Ongoing Work*
- **Main Image**: Primary image with hotspot support (serves full-screen hero and cards via Sanity CDN)
- **Gallery Images**: Optional secondary photos for the detail modal
- **Description**: Editorial paragraph describing design intent
- **Is Featured**: Maximum 3 projects appear in the 3-column *Selected Works* section on the homepage
- **Sort Order**: Number (1, 2, 3...) controlling display order

