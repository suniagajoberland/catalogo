// Archivo productos.js

export const products = [
  {
    id: 1,
    name: "DS-D5B65RB/C | Pantalla interactiva 4K de 65 pulgadas",
    price: 0,
    specs:
      'Pantalla Interactiva Touch de 65 " / Cámara Web 8 MP / Resolución 4K / Bocinas Integradas / Entradas HDMI y VGA / Incluye 2 Lápices para Escribir',
    tech: "Pantalla Ultra HD con resolución de señal de entrada de hasta 3840 × 2160 disponible. Escritura ultrafina de 20 px y 2 mm de diámetro reconocible con una precisión de 1 mm. Proyección Wi-Fi incorporada sin necesidad de conexión por cable. El sistema de pizarra interactiva incorporado permite realizar anotaciones y compartir mediante código QR. Pantalla en bucle disponible. Varias interfaces de audio y vídeo para acceso al dispositivo. El chip conmutador de red incorporado ahorra un conmutador de red. El sistema Android incorporado proporciona todo tipo de aplicaciones. Compatible con dispositivos OPS/OPS-C, lo que permite un cambio suave entre sistemas integrados. Diseño ultrafino con marco de perfil de aluminio.",
    fabricante:
      "https://www.ezviz.com/product/ezviz+smart+microsd+card+d+series/56277#Spec",
    img: "./img/DS-D5B65RBC.png",
    alt: "DS-D5B65RB/C",
  },
  {
    id: 2,
    name: "DS-D5B65RB/EL | Pantalla interactiva 4K de 65 pulgadas",
    price: 0,
    specs:
      'Pantalla Interactiva Touch de 65 " / Cámara Web 8 MP / Resolución 4K / Bocinas Integradas / Entradas HDMI y VGA / Incluye 2 Lápices para Escribir',
    tech: "Pantalla UHD 4K con resolución de 3840 × 2160. Diseño antideslumbrante y antibloqueo para garantizar una interacción fluida. Sistemas duales de Android y Windows (opcional con OPS de 195 × 30 × 180 mm), que ahorran costos y son fáciles de usar, se recomienda ejecutar el software de videoconferencia en el sistema Windows. Respuesta rápida, controles táctiles de hasta 40 puntos y experiencia de escritura fluida. Diseño frontal con múltiples botones para un uso cómodo en el aula.",
    fabricante:
      "https://display.hikvision.com/es/products/interactive-flat-panel-display/interactive-flat-panels/value-series/ds-d5b65rb-el/",
    img: "./img/DS-D5B65RBEL.jpg",
    alt: "DS-D5B65RB/EL",
  },
  {
    id: 3,
    name: "DS-D5B75RB/EL | Pantalla interactiva 4K de 75 pulgadas",
    price: 0,
    specs:
      'Pantalla Interactiva Touch de 75 " / Cámara Web 8 MP / Resolución 4K / Bocinas Integradas / Entradas HDMI y VGA / Incluye 2 Lápices para Escribir',
    tech: "Pantalla UHD 4K con resolución de 3840 × 2160. Diseño antideslumbrante y antibloqueo para garantizar una interacción fluida. Sistemas duales de Android y Windows (opcional con OPS de 195 × 30 × 180 mm), que ahorran costos y son fáciles de usar, se recomi enda ejecutar el software de videoconferencia en el sistema Windows. Respuesta rápida, controles táctiles de hasta 40 puntos y experiencia de escritura fluida. Diseño frontal con múltiples botones para un uso cómodo en el aula.",
    fabricante:
      "https://display.hikvision.com/es/products/interactive-flat-panel-display/interactive-flat-panels/value-series/ds-d5b75rb-el/",
    img: "./img/DS-D5B65RBEL.jpg",
    alt: "DS-D5B75RB/EL",
  },
  {
    id: 4,
    name: "DS-D5C86RB/B | Pantalla interactiva 4K de 86 pulgadas",
    price: 0,
    specs:
      'Pantalla Interactiva Touch de 86 " / Cámara Web 8 MP / Resolución 4K / Bocinas Integradas / Entradas HDMI y VGA / Incluye 2 Lápices para Escribir',
    tech: "Pantalla UHD 4K con resolución de 3840 × 2160. Diseño antideslumbrante y antibloqueo para garantizar una interacción fluida. Sistemas duales de Android y Windows (opcional con OPS de 195 × 30 × 180 mm), que ahorran costos y son fáciles de usar, se recomi enda ejecutar el software de videoconferencia en el sistema Windows. Respuesta rápida, controles táctiles de hasta 40 puntos y experiencia de escritura fluida. Diseño frontal con múltiples botones para un uso cómodo en el aula.",
    fabricante:
      "https://www.hikvision.com/es-la/products/display-and-control/interactive-flat-panels/d5c-series/ds-d5c86rb-b/",
    img: "./img/DS-D5B65RBEL.jpg",
    alt: "DS-D5C86RB/B",
  },
  {
    id: 5,
    name: 'DS-D5ABKY2-S | Soportes planos para paneles de conferencia de 55-65-75"',
    price: 0,
    specs:
      'Montaje de Piso Móvil para Pantallas de 55" hasta 75" / Compatible con VESA / Incluye Soporte para la Pantalla',
    tech: "Este soporte es adecuado para la instalación de paneles de conferencia de 55/65/75 pulgadas.",
    fabricante:
      "https://display.hikvision.com/es/products/interactive-flat-panel-display/interactive-flat-panels/accessories/ds-d5abky2-s/",
    img: "./img/DS-D5ABKY2-S.png",
    alt: "DS-D5ABKY2-S",
  },
  {
    id: 6,
    name: 'DS-D5ABKY2-B | Soportes para paneles planos de conferencia de 86 a 98"',
    price: 0,
    specs:
      'Montaje de Piso Móvil para Pantallas de 55" hasta 75" / Compatible con VESA / Incluye Soporte para la Pantalla',
    tech: "Este soporte es adecuado para la instalación de paneles de conferencia de 55/65/75 pulgadas.",
    fabricante:
      "https://display.hikvision.com/es/products/interactive-flat-panel-display/interactive-flat-panels/accessories/ds-d5abky2-b/",
    img: "./img/DS-D5ABKY2-S.png",
    alt: "DS-D5ABKY2-B",
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
