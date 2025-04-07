const products = [
  { id: 1, name: "T-shirt", price: 19.99 },
  { id: 2, name: "Shoes", price: 49.99 },
  { id: 3, name: "Watch", price: 89.99 }
];
let cart = [];
function displayProducts() {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";
  products.forEach(product => {
    productContainer.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>`;
  });
}
function displayCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  cart.forEach(item => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
      </div>`;
  });
}
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  displayCart();
}
displayProducts();
