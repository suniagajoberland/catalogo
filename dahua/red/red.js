// Archivo productos.js

export const products = [
  {
    id: 1,
    name: "CS-CMT-CARDT64G-D",
    price: 13.08,
    specs:
      "Ezviz - Memoria Micro SDHC/SDXC para Videovigilancia 64GB 92MB/s Clase 10",
    tech: "La memoria Micro SDHC/SDXC Ezviz CS-CMT-CARDT64G-D es una solución de almacenamiento diseñada específicamente para sistemas de videovigilancia. Con una capacidad de 64GB y una velocidad de lectura de hasta 92MB/s, este dispositivo garantiza un rendimiento óptimo en la grabación y reproducción de video, haciendo que sea una elección ideal para instaladores que buscan eficiencia y fiabilidad en sus proyectos.",
    fabricante:
      "https://www.ezviz.com/product/ezviz+smart+microsd+card+d+series/56277#Spec",
    img: "./img/memoria_sd.jpg",
    alt: "CS-CMT-CARDT64G-D",
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
