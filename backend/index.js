const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const HOST = "172.30.153.34"; // <-- change this to your WSL IP if needed
const BASE_URL = `http://${HOST}:${PORT}`;
const path = require("path");

// Enable CORS for API routes
app.use(cors({
  origin: "*", // use HOST variable here
  methods: ["GET"]
}));

// Serve static images with CORS
app.use("/outfits", express.static(path.join(__dirname, "outfits"), {
  setHeaders: (res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow all origins for images
    res.setHeader("Access-Control-Allow-Methods", "GET");
  }
}));

const clothesDB = {
  dress: [
    { id: 1, name: "Dress 1", image: `${BASE_URL}/outfits/dress1.png`, zIndex: 3 },
    { id: 2, name: "Dress 2", image: `${BASE_URL}/outfits/dress2.png`, zIndex: 3 },
    { id: 3, name: "Dress 3", image: `${BASE_URL}/outfits/dress3.png`, zIndex: 3 }
  ],
  hair: [
    { id: 1, name: "Hair 1", image: `${BASE_URL}/outfits/hair1.png`, zIndex: 5 },
    { id: 2, name: "Hair 2", image: `${BASE_URL}/outfits/hair2.png`, zIndex: 5 },
    { id: 3, name: "Hair 3", image: `${BASE_URL}/outfits/hair3.png`, zIndex: 5 },
    { id: 4, name: "Hair 4", image: `${BASE_URL}/outfits/hair4.png`, zIndex: 5 },
    { id: 5, name: "Hair 5", image: `${BASE_URL}/outfits/hair5.png`, zIndex: 5 }
  ],
  shoe: [
    { id: 1, name: "Shoes 1", image: `${BASE_URL}/outfits/shoe1.png`, zIndex: 1 },
    { id: 2, name: "Shoes 2", image: `${BASE_URL}/outfits/shoe2.png`, zIndex: 1 }
  ],
  top: [
    { id: 1, name: "Top 1", image: `${BASE_URL}/outfits/top1.png`, zIndex: 4 },
    { id: 2, name: "Top 2", image: `${BASE_URL}/outfits/top2.png`, zIndex: 4 }
  ],
  skirt: [
    { id: 1, name: "Skirt 1", image: `${BASE_URL}/outfits/skirt1.png`, zIndex: 2 },
    { id: 2, name: "Skirt 2", image: `${BASE_URL}/outfits/skirt2.png`, zIndex: 2 }
  ],
  pant: [
    { id: 1, name: "Pant 1", image: `${BASE_URL}/outfits/pant1.png`, zIndex: 2 },
    { id: 2, name: "Pant 2", image: `${BASE_URL}/outfits/pant2.png`, zIndex: 2 }
  ]
};

// API endpoint to get clothes by type
app.get("/api/outfits", (req, res) => {
  const type = req.query.type;
  if (!type || !clothesDB[type]) {
    return res.status(400).json({ error: "Invalid type" });
  }
  res.json(clothesDB[type]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
