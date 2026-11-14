/**
 * BHAHAUS — Sanity Seed Script
 * Uploads all 9 studio projects to your Sanity dataset.
 *
 * Usage:
 *   node seed.js <SANITY_WRITE_TOKEN>
 *
 * To get a token:
 *   1. Go to https://manage.sanity.io
 *   2. Select project "hry3ao4k" -> Settings -> API -> Tokens
 *   3. Click "Add API token", choose "Editor" or "Administrator" permissions, and copy the token.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const token = process.argv[2] || process.env.SANITY_TOKEN;

if (!token) {
  console.log('\n❌ Please provide a Sanity Write Token:');
  console.log('   node seed.js <SANITY_WRITE_TOKEN>\n');
  console.log('Get one from: https://manage.sanity.io -> Project hry3ao4k -> API -> Tokens\n');
  process.exit(1);
}

const PROJECT_ID = 'hry3ao4k';
const DATASET = 'production';
const API_VERSION = 'v2024-03-01';

const projects = [
  {
    title: "Suraj Reddy Hotel",
    category: "Hospitality",
    year: "2025",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: true,
    sortOrder: 1,
    description: "A hospitality project balancing welcoming public spaces, dining and guest experiences with generous natural light and bespoke joinery.",
    imagePath: "../b/HOTEL projects/Suraj Reddy Hotel_Website upload/Entry Reception Area_Suraj Reddy.png",
    galleryPaths: [
      "../b/HOTEL projects/Suraj Reddy Hotel_Website upload/Dinning and Buffet.png",
      "../b/HOTEL projects/Suraj Reddy Hotel_Website upload/Banquet Hall perspective.png"
    ]
  },
  {
    title: "K Flat — Candeur 40",
    category: "Residential",
    year: "2024",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: true,
    sortOrder: 2,
    description: "A layered apartment interior where tailored storage, warm finishes and daily living come together.",
    imagePath: "../b/K-Flat Candeur40_For Website_Upload/Living Room_01_Sofa.png",
    galleryPaths: [
      "../b/K-Flat Candeur40_For Website_Upload/Master Bedroom01 .png",
      "../b/K-Flat Candeur40_For Website_Upload/K-FlatKitchen 01.png"
    ]
  },
  {
    title: "M Office",
    category: "Interiors",
    year: "2024",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: true,
    sortOrder: 3,
    description: "A warm, composed office environment shaped around craft, material richness and focused work.",
    imagePath: "../b/M-Office_For Website Upload/Showcase copy.png",
    galleryPaths: [
      "../b/M-Office_For Website Upload/Front Desk copy.png",
      "../b/M-Office_For Website Upload/Working Area copy.png"
    ]
  },
  {
    title: "G House",
    category: "Residential",
    year: "2026",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: false,
    sortOrder: 4,
    description: "A contemporary private residence exploring sculptural brick, deep overhangs and passive cooling.",
    imagePath: "../b/Elevation projects/2026/G-House_Collab with HamaraGhar/N21_HG.png",
    galleryPaths: []
  },
  {
    title: "L House",
    category: "Residential",
    year: "2026",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: false,
    sortOrder: 5,
    description: "An open-plan courtyard villa engaging with lush greenery and shaded verandahs.",
    imagePath: "../b/Elevation projects/2026/L-House_Collab with HamaraGhar/L-House_Perspectice View_Concept_021225.png",
    galleryPaths: []
  },
  {
    title: "S-Flat Destino",
    category: "Residential",
    year: "2025",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: false,
    sortOrder: 6,
    description: "Tailored high-rise residential interiors developed in collaboration with BLH.",
    imagePath: "../b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D1.png",
    galleryPaths: [
      "../b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/D23.png",
      "../b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/mbr2.png",
      "../b/Elevation projects/2025/S-Flat_Destino_hyd_Int_3500sft__Collab with BLH/S2.png"
    ]
  },
  {
    title: "M Kids Playzone",
    category: "Interiors",
    year: "2025",
    location: "Madhapur, Hyderabad",
    status: "finished",
    isFeatured: false,
    sortOrder: 7,
    description: "An imaginative environment for play, movement and discovery, utilizing tactile wood, curved forms and soft indirect illumination.",
    imagePath: "../b/M-Kids Playzone_Website upload/3D.png",
    galleryPaths: [
      "../b/M-Kids Playzone_Website upload/2S.png"
    ]
  },
  {
    title: "NSL V Flat",
    category: "Residential",
    year: "2024",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: false,
    sortOrder: 8,
    description: "A refined private residence focused on comfort, texture and rooms made for everyday rituals.",
    imagePath: "../b/NSL-V-Flat_Hyderabad_Website Upload/MasterBedroom_NSL_V Flat.png",
    galleryPaths: []
  },
  {
    title: "A Office",
    category: "Interiors",
    year: "2018",
    location: "Hyderabad, Telangana",
    status: "finished",
    isFeatured: false,
    sortOrder: 9,
    description: "A studio office project bringing clarity, light and a calm professional character to the workplace.",
    imagePath: "../b/2018 A-Office _Interiors_for Website uplaod/Waiting_Room_A_Office_interiors _2018.png",
    galleryPaths: [
      "../b/2018 A-Office _Interiors_for Website uplaod/Discussion_01Room_A_Office_interiors _2018.png",
      "../b/2018 A-Office _Interiors_for Website uplaod/Discussion_02_A_Office_interiors _2018.png"
    ]
  }
];

function uploadAsset(filePath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.warn('  ⚠️ Asset file not found:', fullPath);
      return resolve(null);
    }
    const ext = path.extname(fullPath).slice(1);
    const contentType = ext === 'png' ? 'image/png' : 'image/jpeg';
    const fileData = fs.readFileSync(fullPath);

    const req = https.request({
      hostname: `${PROJECT_ID}.api.sanity.io`,
      path: `/${API_VERSION}/assets/images/${DATASET}`,
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        'Content-Length': fileData.length,
        Authorization: `Bearer ${token}`
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.document && json.document._id) {
            resolve(json.document._id);
          } else {
            console.error('Asset upload error:', json);
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    });
    req.on('error', err => reject(err));
    req.write(fileData);
    req.end();
  });
}

function createDocument(doc) {
  return new Promise((resolve, reject) => {
    const mutations = [{ create: doc }];
    const postData = JSON.stringify({ mutations });

    const req = https.request({
      hostname: `${PROJECT_ID}.api.sanity.io`,
      path: `/${API_VERSION}/data/mutate/${DATASET}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        Authorization: `Bearer ${token}`
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          resolve(null);
        }
      });
    });
    req.on('error', err => reject(err));
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log(`\n🚀 Seeding ${projects.length} projects to Sanity (Project: ${PROJECT_ID}, Dataset: ${DATASET})...\n`);

  for (const p of projects) {
    console.log(`Processing "${p.title}"...`);
    let mainImageAssetId = null;
    if (p.imagePath) {
      console.log(`  Uploading main image...`);
      mainImageAssetId = await uploadAsset(p.imagePath);
    }

    const galleryAssetIds = [];
    for (const gPath of p.galleryPaths) {
      console.log(`  Uploading gallery image...`);
      const gId = await uploadAsset(gPath);
      if (gId) galleryAssetIds.push(gId);
    }

    const doc = {
      _type: 'project',
      title: p.title,
      category: p.category,
      year: p.year,
      location: p.location,
      status: p.status,
      isFeatured: p.isFeatured,
      sortOrder: p.sortOrder,
      description: p.description,
      mainImage: mainImageAssetId ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: mainImageAssetId
        }
      } : undefined,
      gallery: galleryAssetIds.length ? galleryAssetIds.map(assetId => ({
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId
        }
      })) : undefined
    };

    const res = await createDocument(doc);
    if (res && res.results) {
      console.log(`  ✅ Created: ${p.title}`);
    } else {
      console.error(`  ❌ Failed:`, res);
    }
  }

  console.log('\n🎉 Finished seeding projects to Sanity!\n');
}

run().catch(console.error);

