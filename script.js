// Datos de productos
const products = [
  {
    name: "Gafas Clásicas",
    price: 120,
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800"
  },
  {
    name: "Gafas Modernas",
    price: 150,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"
  },
  {
    name: "Lentes de Sol Retro",
    price: 180,
    img: "https://images.unsplash.com/photo-1582571352032-448f7928eca5?w=800"
  },
  {
    name: "Gafas Elegantes",
    price: 200,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800"
  }
];

// Renderizar productos
const grid = document.querySelector(".grid");

products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <div class="card-body">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <a href="#" class="buy-btn">Comprar</a>
    </div>
  `;
  grid.appendChild(card);
});

// Menú móvil
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
