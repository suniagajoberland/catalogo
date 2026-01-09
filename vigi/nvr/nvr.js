// Archivo productos.js

export const products = [
  {
    id: 1,
    name: "NVR1104H-4P | NVR IP 4 Canales 4 Puertos PoE+",
    price: 0,
    specs:
      "Salida de Vídeo HDMI 4K H.265+ ONVIF",
    tech: "Numero de Canales: 4 - Puertos PoE: 4 (PoE+) - Salida de Video**: HDMI 4K - Compresión de Video: H.265+ - Protocolo: ONVIF - Almacenamiento: Soporta discos duros de 3.5 pulgadas (no incluido) - Alimentación: Entrada de CA 100-240V - Consumo de Energía: Aproximadamente 20W (sin HDD) - Dimensiones: 260 x 210 x 50 mm - Peso: 1.2 kg.",
    fabricante:
      "https://www.vigi.com/es/business-networking/vigi-network-video-recorder/vigi-nvr1104h-4p/",
    img: "./img/NVR1104H-4P.jpg",
    alt: "NVR1104H-4P",
  },
  {
    id: 2,
    name: "NVR1004H-4P | NVR IP 4 Canales 4 Puertos PoE+",
    price: 0,
    specs:
      "Salida de Vídeo HDMI 4K H.265+ ONVIF",
    tech: "Número de Canales: 4 canales - Puertos PoE: 4 puertos PoE+ (802.3at) - Resolución de Salida: HDMI 4K - Compresión de Video: H.265+ / H.265 / H.264+ / H.264 - Capacidad de Disco Duro: Compatible con discos duros de hasta 10 TB (no incluido) - Interfaz de Usuario: Web y aplicación móvil - ONVIF: Soporte completo para integración con cámaras ONVIF - Conectividad de Red: Ethernet 10/100/1000 Mbps - Dimensiones: Compacto, diseño optimizado para instalaciones en rack.",
    fabricante:
      "https://www.vigi.com/es/business-networking/vigi-network-video-recorder/vigi-nvr1004h-4p/",
    img: "./img/NVR1004H-4P.jpg",
    alt: "NVR1004H-4P",
  },
  {
    id: 3,
    name: "NVR1108H-W | NVR Wi-Fi 8 Canales",
    price: 0,
    specs:
      "Salida Simultánea HDMI y VGA 1 Interfaz SATA (hasta 10 TB)",
    tech: "Soporte para hasta 8 canales de video IP -Conectividad Wi-Fi integrada para cámaras inalámbricas - Salidas de video simultáneas HDMI y VGA - Interfaz SATA para disco duro de hasta 10 TB - Compresión de video H.265+ para mayor eficiencia de almacenamiento - Reproducción sincronizada de múltiples canales - Interfaz de usuario intuitiva para configuración rápida - Compatible con cámaras Vigi y otras marcas IP estándar.",
    fabricante:
      "https://www.vigi.com/es/business-networking/vigi-network-video-recorder/vigi-nvr1108h-w/",
    img: "./img/NVR1108H-W.jpg",
    alt: "NVR1108H-W",
  },
  {
    id: 4,
    name: "NVR1008H-8MP | NVR IP 8 Canales 8 Puertos PoE+",
    price: 0,
    specs:
      "Salida de Vídeo HDMI 4K H.265+ ONVIF",
    tech: "Número de Canales: 8 - Puertos PoE: 8 - Resolución de Grabación: Hasta 8 MP - Salida de Vídeo: HDMI 4K - Compresión de Vídeo: H.265+ - Protocolo de Red: ONVIF - Almacenamiento: Compatible con discos duros SATA de hasta 6 TB (no incluido)",
    fabricante:
      "https://www.vigi.com/es/business-networking/vigi-network-video-recorder/vigi-nvr1008h-8mp/",
    img: "./img/NVR1008H-8MP.jpg",
    alt: "NVR1008H-8MP",
  },
  {
    id: 5,
    name: "NVR2016H-16MP | NVR IP 16 Canales 16 Puertos PoE+",
    price: 0,
    specs:
      "Salida de Vídeo HDMI 4K H.265+ ONVIF 140W PoE Budget",
    tech: "Canales: 16 canales de video IP. - Puertos PoE+: 16 puertos PoE+ para la alimentación de cámaras. - Salida de Video: HDMI 4K para una visualización de alta definición. - Compresión: H.265+ para optimizar el almacenamiento y el ancho de banda. - Potencia de salida PoE: 140W, suficiente para alimentar múltiples cámaras simultáneamente. - Capacidad de disco duro: Soporta múltiples discos duros, permitiendo un almacenamiento ampliado para grabaciones prolongadas. - Protocolo: Compatible con ONVIF.",
    fabricante:
      "https://www.vigi.com/es/business-networking/vigi-network-video-recorder/vigi-nvr2016h-16mp/",
    img: "./img/NVR2016H-16MP.jpg",
    alt: "NVR2016H-16MP",
  },
  {
    id: 6,
    name: "NVR4064H | NVR 64 Canales ",
    price: 0,
    specs:
      "H.265+ 2 Salidas de vídeo HDMI y 1 VGA 4 Interfaces Sata",
    tech: "Salidas de video: 2 HDMI (hasta 4K), 1 VGA Compatibilidad con software de gestión VIGI para PC y aplicaciones móviles Soporte para monitoreo remoto y control bidireccional Interfaz gráfica intuitiva para configuración y administración Codificación inteligente para eficiencia en transmisión y almacenamiento",
    fabricante:
      "https://www.vigi.com/es/business-networking/vigi-network-video-recorder/vigi-nvr4064h/",
    img: "./img/NVR4064H.jpg",
    alt: "NVR4064H",
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
