Got it 👍 let’s make a **clean README.md** that documents your project so far.
Here’s a draft you can paste into your repo:

---

# 👗 Doll Website

A simple **virtual dress-up web app** where users can select clothing items (dress, hair, shoes, top, skirt, pants) and see them layered on a doll.
The project is built with **React (frontend)** and **Express (backend)**, running inside **WSL**.

---

## 🚀 Features (so far)

* 🖼️ **Base doll rendering** with layered clothes (images stacked by `z-index`).
* 🎨 **Categories of clothes** (dress, hair, shoes, top, skirt, pant).
* 🧩 **Interactive panel** to choose available clothes by category.
* 👀 **Hover preview** before selecting an item.
* 🗑️ **Remove button per category** to clear clothes.
* 💾 **Download button** to export the dressed doll as an image.
* 🔗 **Backend API** serving clothes JSON + static outfit images.
* 🌐 **WSL network fix**: backend accessible via WSL IP with proper CORS config.

---

## 🛠️ Tech Stack

* **Frontend:** React, CSS (custom)
* **Backend:** Node.js + Express
* **Environment:** WSL2 (Windows Subsystem for Linux)

---

## 📂 Project Structure

```
.
├── backenddevelop/
│   ├── index.js            # Express backend server
│   ├── outfits/            # Static images (dress1.png, hair1.png, etc.)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main app layout
│   │   ├── components/
│   │   │   ├── Doll.js     # Doll renderer with layers
│   │   │   ├── DressingPanel.js
│   │   │   ├── AvailableClothes.js
│   │   │   └── ...
│   │   └── styles.css
│   └── package.json
│
└── README.md
```

---

## ⚡ How to Run

### 1. Start Backend

```bash
cd backenddevelop
npm install
node index.js
```

Backend runs at:
👉 `http://<WSL_IP>:5000`

### 2. Start Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
👉 `http://localhost:3000`

⚠️ Make sure to update the **frontend API base URL** with your WSL IP (e.g., `http://172.xx.xx.xx:5000`).

---

## 📡 API Endpoints

* `GET /api/outfits?type=dress` → returns JSON list of dresses
* `GET /api/outfits?type=hair` → returns JSON list of hairstyles
* (similar for `shoe`, `top`, `skirt`, `pant`)

Each item has:

```json
{
  "id": 1,
  "name": "Dress 1",
  "image": "http://<WSL_IP>:5000/outfits/dress1.png",
  "zIndex": 3
}
```

---

## 📝 Next Steps / Roadmap

* Add more clothes & categories.
* Improve UI styling (nicer clothing panel, draggable clothes, etc).
* Add persistence (save outfits).
* Deploy backend & frontend outside WSL (Docker / cloud).

---

## 👩 Author

Made by Sabrina

---


