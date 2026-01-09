// Archivo main.js

import { products, createProductElement } from "../toner/toner.js";

const catalog = document.getElementById("catalog");

// Cargar productos en el catálogo
products.forEach((product) => {
  const productElem = createProductElement(product);
  catalog.appendChild(productElem);
});

// Lógica del carrito y elementos del DOM
const cart = {};
const phoneNumber = "+584143693311";
const cartButton = document.getElementById("cart-button");
const cartDetails = document.getElementById("cart-details");
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const whatsappOrderBtn = document.getElementById("whatsapp-order");
const whatsappForm = document.getElementById("whatsapp-form");

function updateCartDisplay() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  let totalQuantity = 0;
  for (const id in cart) {
    const item = cart[id];
    total += item.price * item.quantity;
    totalQuantity += item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "cart-item-details";
    detailsDiv.textContent = `${item.name} - $${item.price} x`;

    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.min = 1;
    qtyInput.value = item.quantity;
    qtyInput.className = "cart-item-quantity";
    qtyInput.setAttribute(
      "aria-label",
      `Cantidad de ${item.name} en el carrito`
    );
    qtyInput.onchange = (e) => {
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) {
        val = 1;
        e.target.value = 1;
      }
      cart[id].quantity = val;
      updateCartDisplay();
    };

    const subtotalSpan = document.createElement("span");
    subtotalSpan.textContent = ` = $${(item.price * item.quantity).toFixed(
      2
    )} USD`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "cart-remove-btn";
    removeBtn.setAttribute("aria-label", `Eliminar ${item.name} del carrito`);
    removeBtn.onclick = () => {
      delete cart[id];
      updateCartDisplay();
    };

    detailsDiv.appendChild(qtyInput);
    detailsDiv.appendChild(subtotalSpan);
    div.appendChild(detailsDiv);
    div.appendChild(removeBtn);
    cartItemsContainer.appendChild(div);
  }
  cartTotal.textContent = `Total: $${total.toFixed(2)} USD`;
  cartCount.textContent = totalQuantity;
  whatsappOrderBtn.disabled =
    totalQuantity === 0 || !whatsappForm.checkValidity();
}

function addToCart(product) {
  const id = product.getAttribute("data-id");
  const name = product.getAttribute("data-name");
  const price = Number(product.getAttribute("data-price"));
  const qtyInput = product.querySelector(".quantity-input");
  let quantity = parseInt(qtyInput.value);
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
    qtyInput.value = 1;
  }
  if (cart[id]) {
    cart[id].quantity += quantity;
  } else {
    cart[id] = { name, price, quantity };
  }
  updateCartDisplay();
}

// Mostrar mensaje temporal que indica producto agregado
function showAddedMessage(productName) {
  let messageDiv = document.getElementById("added-message");
  if (!messageDiv) {
    messageDiv = document.createElement("div");
    messageDiv.id = "added-message";
    messageDiv.style.position = "fixed";
    messageDiv.style.top = "10px";
    messageDiv.style.right = "10px";
    messageDiv.style.backgroundColor = "#4CAF50";
    messageDiv.style.color = "white";
    messageDiv.style.padding = "10px 20px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.zIndex = "9999";
    messageDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    messageDiv.style.transition = "opacity 0.5s";
    document.body.appendChild(messageDiv);
  }

  messageDiv.textContent = `"${productName}" agregado al carrito.`;
  messageDiv.style.opacity = "1";

  setTimeout(() => {
    messageDiv.style.opacity = "0";
  }, 2500);
}

function setupEventListeners() {
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.onclick = (e) => {
      const product = e.target.closest(".product");
      addToCart(product);
      cartDetails.style.display = "block";
      showAddedMessage(product.getAttribute("data-name"));
    };
  });

  document.querySelectorAll(".btn-whatsapp-product").forEach((button) => {
    button.onclick = (e) => {
      const product = e.target.closest(".product");
      const name = product.getAttribute("data-name");
      const message = encodeURIComponent(
        //CAMBIAR EL MENSAJE
        `Hola, quiero consultar sobre el producto: ${name}. Por favor coordinen disponibilidad, plazo de entrega y opciones de pago.

¡Gracias por la atención!.`
      );
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    };
  });

  document.querySelectorAll(".btn-tech").forEach((button) => {
    button.onclick = (e) => {
      const product = e.target.closest(".product");
      const techText = product.getAttribute("data-tech");
      currentFabricanteUrl = product.getAttribute("data-fabricante") || "";
      techContent.textContent = techText;
      techModal.style.display = "block";
      btnFabricante.style.display = currentFabricanteUrl ? "block" : "none";
    };
  });
}

setupEventListeners();

cartButton.onclick = () => {
  cartDetails.style.display =
    cartDetails.style.display === "block" ? "none" : "block";
};

whatsappForm.addEventListener("input", () => {
  whatsappOrderBtn.disabled =
    Object.keys(cart).length === 0 || !whatsappForm.checkValidity();
});

whatsappForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Object.keys(cart).length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  if (!whatsappForm.checkValidity()) {
    whatsappForm.reportValidity();
    return;
  }
  let message = "Hola, quiero realizar el siguiente pedido:%0A";
  for (const id in cart) {
    const item = cart[id];
    message += `${item.name} - Cantidad: ${item.quantity} - Subtotal: $${(
      item.price * item.quantity
    ).toFixed(2)} USD%0A`;
  }
  message += `${cartTotal.textContent}%0A%0A`;
  message += "Datos del comprador:%0A";
  message += `Nombre completo: ${encodeURIComponent(
    whatsappForm.fullName.value
  )}%0A`;
  message += `Cédula: ${encodeURIComponent(whatsappForm.cedula.value)}%0A`;
  message += `Dirección: ${encodeURIComponent(
    whatsappForm.direccion.value
  )}%0A`;
  message += `Teléfono: ${encodeURIComponent(whatsappForm.telefono.value)}%0A`;
  message +=
    "%0APor favor coordinen disponibilidad, plazo de entrega y opciones de pago. ¡Gracias por la atención! ";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");

  whatsappForm.reset();
  for (const key in cart) {
    delete cart[key];
  }
  updateCartDisplay();
  cartDetails.style.display = "none";
});

// Modal técnica
const techModal = document.getElementById("tech-modal");
const techContent = document.getElementById("tech-content");
const closeModalBtn = document.querySelector(".close-modal");
const btnFabricante = document.getElementById("btn-fabricante");
let currentFabricanteUrl = "";

closeModalBtn.onclick = () => {
  techModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == techModal) {
    techModal.style.display = "none";
  }
};

btnFabricante.onclick = () => {
  if (currentFabricanteUrl) {
    window.open(currentFabricanteUrl, "_blank", "noopener");
  }
};

updateCartDisplay();
