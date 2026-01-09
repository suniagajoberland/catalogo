// Archivo productos.js

export const products = [
  {
    id: 1,
    name: "MP296 | Fantech - Mouse Pad Vigil Small 290x250mm",
    price: 0,
    specs:
      "Gamers que requieren precisión en movimientos rápidos sin sacrificar espacio. Profesionales que trabajan en escritorios pequeños o setups móviles. Estudiantes que necesitan una superficie cómoda y eficiente para tareas diarias. Usuarios que valoran la ergonomía y buscan reducir la fatiga en la muñeca durante largas sesiones.",
    tech: "Dimensiones: 290 x 250 mm Grosor: 3 mm Material de la superficie: Tela de alta calidad Material de la base: Goma natural antideslizante Compatibilidad: Ratones ópticos, láser y gaming",
    fabricante:
      "#",
    img: "./img/MP296.jpg",
    alt: "MP296",
  },
  {
    id: 2,
    name: "MPR800S | Fantech - Mouse Pad Firefly Extended 800x300mm",
    price: 0,
    specs:
      "Dimensiones: 800mm x 300mm - Grosor: 4mm.",
    tech: "Bordes: Cosidos para mayor durabilidad - Espesor: 3mm, proporcionando una base estable y cómoda - Compatibilidad: Ideal para todo tipo de mouses, incluyendo ópticos y láser",
    fabricante:
      "#",
    img: "./img/MPR800S.jpg",
    alt: "MPR800S",
  },
  {
    id: 3,
    name: "MP353 | Fantech - Mouse Pad Agile Small 350x300mm",
    price: 0,
    specs:
      "Dimensiones: 350x300mm - Material de la superficie: Tela suave de alta calidad - Material de la base: Goma antideslizante.",
    tech: "Material de la superficie: Tejido suave y duradero - Material de la base: Goma antideslizante - Color: Negro - Costuras: Laterales reforzadas",
    fabricante:
      "#",
    img: "./img/MP353.jpg",
    alt: "MP353",
  },
  {
    id: 4,
    name: "MPR800S-PK | Fantech - Mouse Pad Firefly Extended 800x300mm",
    price: 0,
    specs:
      "Dimensiones: 800mm x 300mm - Material: Tejido de microfibra con base de goma antideslizante.",
    tech: "Color: Rosado - Peso: Aproximadamente 300g - Grosor: 3mm",
    fabricante:
      "#",
    img: "./img/MPR800S-PK.jpg",
    alt: "MPR800S-PK",
  },
  {
    id: 5,
    name: "MP452 | Fantech - Mouse Pad Vigil Medium 450x400mm",
    price: 0,
    specs:
      "Dimensiones: 450x400 mm - Grosor: Aproximadamente 3 mm - Material de la superficie: Tejido de alta calidad.",
    tech: "Material de la base: Goma antideslizante - Compatibilidad: Adecuado para todos los tipos de mouse, incluidos los ópticos y láser - Resistencia al desgaste: Alta, diseñada para un uso intensivo - Color: Variedad de opciones disponibles para adaptarse a diferentes preferencias estéticas",
    fabricante:
      "#",
    img: "./img/MP452.jpg",
    alt: "MP452",
  },
  {
    id: 6,
    name: "MPR800S-WE | Fantech - Mouse Pad Firefly Extended 800x300mm",
    price: 0,
    specs:
      "Dimensiones: 800 mm x 300 mm - Material de la superficie: Textil suave.",
    tech: "Material de la base: Goma antideslizante - Bordes: Reforzados para mayor durabilidad - Color: Blanco - Peso: Aproximadamente 350 gramos.",
    fabricante:
      "#",
    img: "./img/MPR800S-WE.jpg",
    alt: "MPR800S-WE",
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
