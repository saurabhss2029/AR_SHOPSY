# 🛍️ AR-Shopsy

**AR-Shopsy** is a modern, interactive AR-based webstore that allows users to view photorealistic 3D product models in Augmented Reality directly in their browser. Built using React and powerful libraries like `@google/model-viewer`, it delivers a seamless and immersive online shopping experience.

---

## 🚀 Features

- 🌐 Fully responsive React-based frontend
- 🧠 3D product models rendered using `<model-viewer>`
- 📱 QR code generator for mobile AR access
- 🎥 Smooth animations using GSAP and Framer Motion
- 💡 FontAwesome icon support for UI enhancement
- 🌀 Lazy loading for improved performance
- 🔗 React Router for seamless navigation
- ✨ Creative UI interactions via SheryJS

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM
- **AR Rendering**: @google/model-viewer
- **Animations**: GSAP, Framer Motion
- **Icons**: FontAwesome
- **QR Code**: qrcode.react
- **UX/UI Enhancements**: SheryJS, React Lazyload

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/UjjwalTomar0808/AR-Shopsy.git
cd AR-Shopsy
2. Install Dependencies
bash
Copy
Edit
npm install --legacy-peer-deps
⚠️ Note: Use --legacy-peer-deps to avoid React 18 compatibility issues.

3. Start the Development Server
bash
Copy
Edit
npm start
Open your browser at http://localhost:3000

🧭 Project Structure
csharp
Copy
Edit
AR-Shopsy/
│
├── public/               # Static files
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── App.js            # Root application file
│   └── index.js          # Entry point
├── package.json
└── README.md

