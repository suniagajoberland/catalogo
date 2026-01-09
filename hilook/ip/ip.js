// Archivo productos.js

export const products = [
  {
    id: 1,
    name: "IPC-T221H | Turret IP 2 Megapixel / 30 mts IR",
    price: 0,
    specs:
      "Exterior IP67 / PoE / dWDR / Lente 2.8 mm / H.265 / Onvif",
    tech: "Resolución maxima: 1920 x 1080 ( 2 Megapixel). Iluminación mínima: color 0.05 Lux @ (F2.0, AGC ON). Iluminación mínima: B/N 0.0 Lux con IR. Día / Noche Real (filtro ICR). Distancia focal: 2.8 mm (visión angular 114.8º). Distancia de infrarrojo: 30 mts Smart IR.",
    fabricante:
      "https://www.hikvision.com/es-la/products/HiLook-IP-Products/Network-Cameras/Value-Camera/ipc-t221h/",
    img: "./img/IPC-T221H.jpg",
    alt: "IPC-T221H",
  },
  {
    id: 2,
    name: "IPC-B129H | Bala IP 2 Megapixel (1080p) / Lente 2.8 mm",
    price: 0,
    specs:
      "Cámara bullet IP 2MP HiLook ColorVu, PoE, luz blanca 30m, IP67, H.265+, visión a color 24/7.",
    tech: "La IPC-B129H es una cámara bullet IP de 2 megapíxeles con lente fijo de 2.8 mm, que ofrece imagen a color las 24 horas del día gracias a la tecnología ColorVu y su luz blanca de hasta 30 metros.",
    fabricante:
      "https://www.hikvision.com/es-la/products/HiLook-IP-Products/Network-Cameras/Value-Camera/ipc-b129h/",
    img: "./img/IPC-B129H.jpg",
    alt: "IPC-B129H",
  },
  {
    id: 3,
    name: "IPC-T229H | CÁMARA DOMO IP 2MP - COLORVU 2.8MM",
    price: 0,
    specs:
      "Cámara bullet IP 2MP HiLook ColorVu, PoE, luz blanca 30m, IP67, H.265+, visión a color 24/7.",
    tech: "Resolución: 2MP Luz blanca: 30 mts, 0.001 Lux @F1.0 Lente: 2.8 mm Compresión de video: H.265+/H.265, H.264+/H.264 dWDR IP67, PoE, Material: Metal y plástico",
    fabricante:
      "https://www.hikvision.com/es-la/products/HiLook-IP-Products/Network-Cameras/Value-Camera/ipc-t229h/",
    img: "./img/IPC-T229H.jpg",
    alt: "IPC-T229H",
  },
  {
    id: 4,
    name: "IPC-B149H | Bullet IP ColorVu 2K [4MP] Lente de 2.8mm ",
    price: 0,
    specs:
      "Resolución: 4MP (2560 x 1440) - Lente: 2.8mm - Tipo de cámara: Bullet IP - Tecnología: ColorVu - Material: Metal - Visión nocturna: IR con hasta 30 metros de alcance",
    tech: "Conectividad: IP (PoE) - Protocolos: ONVIF, RTSP - Funciones inteligentes: Detección de movimiento, alertas de intrusión.",
    fabricante:
      "https://www.hikvision.com/es-la/products/HiLook-IP-Products/Network-Cameras/Value-Camera/ipc-b149h/",
    img: "./img/IPC-B149H.jpg",
    alt: "IPC-B149H",
  },
  {
    id: 5,
    name: "IPC-D640H-Z | HiLook Series / Domo IP 4 Megapixel / 30 mts IR / Exterior IP67",
    price: 0,
    specs:
      "PoE / WDR 120 dB / Lente Motorizado 2.8-12 mm / IK10 / MicroSD",
    tech: "Resolución máxima: 4 Megapixel (2560 x 1440). Iluminación mínima: color 0.01 Lux @ (F1.2, AGC ON). Día / Noche Real (filtro ICR). Distancia focal: 2.8-12 mm (98° - 28°). Distancia de infrarrojo: 30 mts Smart IR.",
    fabricante:
      "https://www.hikvision.com/es-la/products/HiLook-IP-Products/Network-Cameras/Value-Camera/ipc-d640h-z/",
    img: "./img/IPC-D640H-Z.jpg",
    alt: "IPC-D640H-Z",
  },
  {
    id: 6,
    name: "IPC-B620H-Z | Bala IP 2 Megapixel / Lente Motorizado 2.8 - 12 mm / 50 mts IR EXIR",
    price: 0,
    specs:
      "PoE / Exterior IP67 / dWDR / Micro SD / Ultra Baja Iluminación / Onvif",
    tech: "Resolución máxima 1920x1080 (2 megapíxeles) Iluminación mínima color 0.005 lux (F1.6) Lente motorizado 2.8-12 mm, ángulo 96-36 grados Distancia infrarrojo 50 metros Smart IR Compresión avanzada H.265+/H.265/H.264 soportada",
    fabricante:
      "https://www.hikvision.com/es-la/products/HiLook-IP-Products/Network-Cameras/Value-Camera/ipc-b620h-z--v/",
    img: "./img/IPC-B620H-Z.jpg",
    alt: "IPC-B620H-Z",
  },
];

export function createProductElement(product) {
  const div = document.createElement("div");
  div.className = "product";
  div.setAttribute("data-id", product.id);
  div.setAttribute("data-name", product.name);
  div.setAttribute("data-price", product.price);
  div.setAttribute("data-specs", product.specs);
  div.setAttribute("data-tech", product.tech);
  div.setAttribute("data-fabricante", product.fabricante);

  div.innerHTML = `
    <img src="${product.img}" alt="${product.alt}" />
    <h3>${product.name}</h3>
    <div class="price">$${product.price} USD</div>
    <div class="specs">${product.specs}</div>
    <input type="number" min="1" value="1" class="quantity-input" aria-label="Cantidad de ${product.name}" />
    <button class="add-to-cart">Agregar al carrito</button>
    <div class="btn-group">
      <button class="btn-whatsapp-product">Consultar por WhatsApp</button>
      <button class="btn-tech">Ficha Técnica</button>
    </div>
  `;

  return div;
}
