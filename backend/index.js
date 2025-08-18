const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const path = require("path");

// Enable CORS for API routes
app.use(cors({
  origin: "http://localhost:3000",
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
    { id: 1, name: "Dress 1", image: "http://localhost:5000/outfits/dress1.png" },
    { id: 2, name: "Dress 2", image: "http://localhost:5000/outfits/dress2.png" },
    { id: 3, name: "Dress 3", image: "http://localhost:5000/outfits/dress3.png" }
  ],
  hair: [
    { id: 1, name: "Hair 1", image: "http://localhost:5000/outfits/hair1.png" },
    { id: 2, name: "Hair 2", image: "http://localhost:5000/outfits/hair2.png" }
  ],
  shoes: [
    { id: 1, name: "Shoes 1", image: "http://localhost:5000/outfits/shoe1.png" }
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
  console.log(`Server running on http://localhost:${PORT}`);
});
