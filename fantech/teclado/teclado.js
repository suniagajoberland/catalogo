// Archivo productos.js

export const products = [
  {
    id: 1,
    name: "WK895-BLACK | Fantech - Teclado+Mouse Go Inalámbrico [Negro]",
    price: 0,
    specs:
      "Teclado: - Tipo: Teclado de membrana - Dimensiones: 440 mm x 135 mm x 30 mm - Peso: 550 g",
    tech: "entación: 2 pilas AAA (no incluidas) - Mouse: - Tipo: Mouse óptico - Dimensiones: 110 mm x 60 mm x 30 mm - Peso: 100 g - Alimentación: 1 pila AA (no incluida) - Conexión: Receptor USB de 2.4 GHz incluido, que se conecta fácilmente a cualquier computadora.",
    fabricante:
      "https://fantechworld.com/products/go-pop-wk895?srsltid=AfmBOooNLTqguYMnn0UYmROgLOAUOfkFERXs8tzoxj0C993qi7t-hXvB",
    img: "./img/WK895-BLACK.jpg",
    alt: "WK895-BLACK",
  },
  {
    id: 2,
    name: "MK874V2-SKB(BL) | Fantech -Teclado Atom 63 Alambrico SW Azul [Azul Sky]",
    price: 0,
    specs:
      "Modelo: MK874V2-SKB(BL) - Tipo de conexión: Alámbrico (USB) - Dimensiones: 295 x 100 x 40 mm",
    tech: "Peso: 1.2 kg - Número de teclas: 63 - Tipo de switches: Mecánicos - Retroiluminación: Azul - Compatibilidad: Compatible con sistemas operativos Windows y Mac OS.",
    fabricante:
      "https://fantechworld.com/products/atom63-mori-mk874v2?variant=45290439442617",
    img: "./img/MK874V2-SKB(BL).jpg",
    alt: "MK874V2-SKB(BL)",
  },
  {
    id: 3,
    name: "MK311-WH-WH(RD) | Fantech - Teclado Atom AIR61 Cableado SW Rojo [Blanco]",
    price: 0,
    specs:
      "Modelo: MK311-WH-WH(RD) Tipo de conexión: Cableado USB-C Número de teclas: 61 Tipo de switch: Mecánico rojo de perfil bajo",
    tech: "Material de teclas: ABS Anti-ghosting: 22 teclas Iluminación: RGB con 17 modos Dimensiones: 291 x 101 x 25 mm Peso: 340 ± 5 g Compatibilidad: Windows 7 o superior, Mac OS 10.11 o superior Longitud del cable: 1.5 m",
    fabricante:
      "https://fantechworld.com/products/atom-air61?srsltid=AfmBOorc4ifEW83ahYBuuyDo3EEZoedOarffCGW_71JxP52g0NMucuXx",
    img: "./img/MK311-WH-WH(RD).jpg",
    alt: "MK311-WH-WH(RD)",
  },
  {
    id: 4,
    name: "MK877S-BK-BLWH(RD) | Fantech - Teclado Atom87S Cableado SW Rojo [Mori Azul]",
    price: 0,
    specs:
      "Tipo de interruptor: Mecánico (Rojo) Número de teclas: 87 Anti-ghosting: 26 teclas Conectividad: Cable USB-C desmontable Longitud del cable: 1.5 metros (PVC)",
    tech: "Dimensiones: 352 × 124 × 32 mm Consumo energético: 5V == 200 mA Material de teclas: ABS de doble inyección Efectos de iluminación: 17 modos RGB Compatibilidad: Windows y Mac OS.",
    fabricante:
      "https://fantechworld.com/products/atom87s-mori-mk877s?srsltid=AfmBOoqY_AJ_terOzN26tZL3pwE99UPwtPSWdYWQf9dPmqKrnFqV6LDm",
    img: "./img/MK877S-BK-BLWH(RD).jpg",
    alt: "MK877S-BK-BLWH(RD)",
  },
  {
    id: 5,
    name: "MK875V2-SKB(RD) | Fantech -Teclado Atom 81 Cableado SW Rojo [Azul Sky]",
    price: 0,
    specs:
      "3 pines intercambiables en caliente Compatible con varios interruptores mecánicos de 3 pines Efectos de iluminación ATOM81 está equipado con 17 modos de espectro para mejorar tu experiencia de juego",
    tech: "26 pulsaciones simultáneas de teclas El ATOM81 viene con una función anti-efecto fantasma superior que admite hasta 26 pulsaciones simultáneas de teclas.",
    fabricante:
      "https://fantechworld.com/products/atom81-mk875v2-mizu-edition?srsltid=AfmBOor5tSGAd5fXIvbSTPls02tBKZWEELta5CcgIFMRoY109Z4lkakh",
    img: "./img/MK875V2-SKB(RD).jpg",
    alt: "MK875V2-SKB(RD)",
  },
  {
    id: 6,
    name: "MK314-WH-WH(RD) | Fantech - Teclado Atom AIR108 Cableado SW Rojo [Blanco]",
    price: 0,
    specs:
      "3 pines intercambiables en caliente Compatible con varios interruptores mecánicos de 3 pines Efectos de iluminación ATOM81 está equipado con 17 modos de espectro para mejorar tu experiencia de juego",
    tech: "26 pulsaciones simultáneas de teclas El ATOM81 viene con una función anti-efecto fantasma superior que admite hasta 26 pulsaciones simultáneas de teclas.",
    fabricante:
      "https://fantechworld.com/products/atom81-mk875v2-mizu-edition?srsltid=AfmBOor5tSGAd5fXIvbSTPls02tBKZWEELta5CcgIFMRoY109Z4lkakh",
    img: "./img/MK314-WH-WH(RD).jpg",
    alt: "MK314-WH-WH(RD)",
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
