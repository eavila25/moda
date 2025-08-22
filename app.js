const PRODUCTS = [
  { id: 1, name: "Vestido Rosa", price: 50, category: "ropa", img: "https://picsum.photos/300/200?random=1" },
  { id: 2, name: "Camisa Blanca", price: 35, category: "ropa", img: "https://picsum.photos/300/200?random=2" },
  { id: 3, name: "Bolso Elegante", price: 70, category: "accesorios", img: "https://picsum.photos/300/200?random=3" },
  { id: 4, name: "Zapatos Negros", price: 80, category: "ropa", img: "https://picsum.photos/300/200?random=4" },
  { id: 5, name: "Collar Dorado", price: 25, category: "accesorios", img: "https://picsum.photos/300/200?random=5" }
];

let carrito = [];

const productosDiv = document.getElementById("productos");
const searchInput = document.getElementById("search");

function mostrarProductos(lista) {
  productosDiv.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
    `;
    productosDiv.appendChild(card);
  });
}
mostrarProductos(PRODUCTS);

function filtrar(categoria) {
  if (categoria === "all") {
    mostrarProductos(PRODUCTS);
  } else {
    mostrarProductos(PRODUCTS.filter(p => p.category === categoria));
  }
}

searchInput.addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = PRODUCTS.filter(p => p.name.toLowerCase().includes(texto));
  mostrarProductos(filtrados);
});

function agregarCarrito(id) {
  const producto = PRODUCTS.find(p => p.id === id);
  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  
  cartItems.innerHTML = "";
  let total = 0;
  carrito.forEach(item => {
    total += item.price * item.cantidad;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (x${item.cantidad}) - $${item.price * item.cantidad}
      <button onclick="quitarItem(${item.id})">❌</button>
    `;
    cartItems.appendChild(li);
  });
  
  cartCount.textContent = carrito.length;
  cartTotal.textContent = total;
}

function quitarItem(id) {
  carrito = carrito.filter(p => p.id !== id);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function toggleCarrito() {
  document.getElementById("carrito-modal").style.display =
    document.getElementById("carrito-modal").style.display === "block" ? "none" : "block";
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
