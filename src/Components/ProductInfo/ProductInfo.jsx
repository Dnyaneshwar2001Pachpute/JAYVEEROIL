import React, { useState } from "react";
import "./ProductInfo.css";
import sarki1 from "../../assets/sarki1.jpg";
import sarki2 from "../../assets/sarki2.jpg";
import sarki3 from "../../assets/sarki3.jpg";

const products = [
  {
    id: 1,
    title: {
      en: "Cotton Seed Cake - Type 1",
      hi: "सरकी – प्रकार 1",
      mr: "सरकी – प्रकार 1",
    },
    desc: {
      en: "Cotton Seed Cake - 12–14% Fiber, 20–22% Protein, 7.5% Moisture. Supports immune function, promotes digestion, nutritious animal feed.",
      hi: "कपास खली - 12–14% फाइबर, 20–22% प्रोटीन, 7.5% नमी। प्रतिरक्षा प्रणाली को समर्थन देता है, पाचन को बढ़ाता है, पौष्टिक पशु आहार।",
      mr: "कापूस खत - १२–१४% फायबर, २०–२२% प्रोटीन, ७.५% ओलावा. रोगप्रतिकारक शक्ती वाढवते, पचनास मदत करते, पौष्टिक पशुखाद्य.",
    },
    quality: "best",
  },
  {
    id: 2,
    title: {
      en: "Cotton Seed Cake – Type 2",
      hi: "सरकी – प्रकार 2",
      mr: "सरकी – प्रकार 2",
    },
    desc: {
      en: "Contains ~20–25% protein, ~10–15% fibre, moisture ~7‑10%. Supports immune function and digestion.",
      hi: "लगभग 20‑25% प्रोटीन, 10‑15% फाइबर, नमी ~7‑10%. प्रतिरक्षा शक्ति और पाचन को समर्थन देता है।",
      mr: "सुमारे 20‑25% प्रोटीन, 10‑15% फायबर, ओलावा ~7‑10%. रोग‑प्रतिकारक शक्ती व पचनास मदत करते.",
    },
    quality: "normal",
  },
  {
    id: 3,
    title: {
      en: "Cotton Seed Cake – Type 3",
      hi: "सरकी – प्रकार 3",
      mr: "सरकी – प्रकार 3",
    },
    desc: {
      en: "High protein feed (~30–45%) with lower fibre (~5–25%), suitable for mature ruminants. Use with care due to gossypol.",
      hi: "उच्च प्रोटीन (~30‑45%) और कम फाइबर (~5‑25%) वाला चारा, वयस्क रूमिनेंट के लिए उपयुक्त। गोसिफॉल को ध्यान में रखते हुए उपयोग करें।",
      mr: "उच्च प्रोटीन्सह चारा (~30‑45%), कमी फायबर (~5‑25%), प्रौढ रूमिनंट्ससाठी योग्य. गॉसिफॉलसाठी खबरदारी घ्या.",
    },
    quality: "normal",
  },
];

const images = [sarki1, sarki2, sarki3];

export default function ProductInfo() {
  const [lang, setLang] = useState("en");

  return (
    <div className="product-info-container">
      <h2>Available Products Information</h2>
      <div className="language-buttons">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("hi")}>हिंदी</button>
        <button onClick={() => setLang("mr")}>मराठी</button>
      </div>
      <div className="products-grid">
        {products.map((prod, idx) => (
          <div className="product-card" key={prod.id}>
            {/* ✅ Best Quality Badge */}
            {prod.quality === "best" && (
              <div className="best-badge">⭐ Best Quality</div>
            )}

            <img
              src={images[idx]}
              alt={prod.title[lang]}
              className="product-image"
            />
            <div className="product-details">
              <h3>{prod.title[lang]}</h3>
              <p>{prod.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
