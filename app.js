// Productos simulados
const PRODUCTS = [
  { id: 1, name: "Lentes de Sol Urban", category: "sol", price: 120, img: "https://images.unsplash.com/photo-1591076482161-2a5b3722e2c1?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Lentes Ópticos Elegance", category: "opticos", price: 200, img: "https://images.unsplash.com/photo-1591076482161-2a5b3722e2c1?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Lentes Deportivos Runner", category: "deportivos", price: 150, img: "https://images.unsplash.com/photo-1622484211144-f1b2f871d3bc?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Gafas Vintage Retro", category: "opticos", price: 180, img: "https://images.unsplash.com/photo-1583391733981-6f6e3c2e5f16?auto=format&fit=crop&w=500&q=80" }
];

let carrito = [];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const carritoModal = document.getElementById("carritoModal");
const carritoLista = document.getElementById("carritoLista");
const carritoTotal = document.getElementById("carritoTotal");

function renderProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  productGrid.innerHTML = "";

  PRODUCTS.filter(p => 
    (category === "all" || p.category === category) &&
    p.name.toLowerCase().includes(searchText)
  ).forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>S/. ${product.price}</p>
      <button onclick="addToCart(${product.id})">Agregar</button>
    `;
    productGrid.appendChild(div);
  });
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  carrito.push(product);
  updateCarrito();
}

function updateCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - S/. ${item.price}`;
    carritoLista.appendChild(li);
  });
  carritoTotal.textContent = total.toFixed(2);
}

document.getElementById("cartBtn").addEventListener("click", () => {
  carritoModal.style.display = "flex";
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
  carritoModal.style.display = "none";
});

document.getElementById("vaciarCarrito").addEventListener("click", () => {
  carrito = [];
  updateCarrito();
});

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

// Menu mobile
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("header nav").classList.toggle("active");
});

// Inicializar
renderProducts();
