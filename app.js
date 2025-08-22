// Lista de productos (ejemplo de lentes)
const PRODUCTS = [
  { id: 1, nombre: "Lentes Clásicos", precio: 120.00, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
  { id: 2, nombre: "Lentes Aviador", precio: 150.00, img: "https://images.unsplash.com/photo-1606813903276-63d31589c92f?auto=format&fit=crop&w=600&q=80" },
  { id: 3, nombre: "Lentes Modernos", precio: 180.00, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80" },
  { id: 4, nombre: "Lentes Vintage", precio: 200.00, img: "https://images.unsplash.com/photo-1551717743-49959800b1f9?auto=format&fit=crop&w=600&q=80" }
];

let carrito = [];

// Renderizar productos
const contenedor = document.getElementById("productos-lista");
PRODUCTS.forEach(prod => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>S/ ${prod.precio.toFixed(2)}</p>
    <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});

// Funciones carrito
function agregarAlCarrito(id) {
  const producto = PRODUCTS.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito-lista");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
    lista.appendChild(li);
  });
  document.getElementById("carrito-total").textContent = total.toFixed(2);
  document.getElementById("cart-count").textContent = carrito.length;
}

// Modal carrito
const modal = document.getElementById("carrito-modal");
document.getElementById("cart-btn").addEventListener("click", () => modal.style.display = "flex");
document.getElementById("cerrar-carrito").addEventListener("click", () => modal.style.display = "none");
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});
