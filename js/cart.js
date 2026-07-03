// SNKRS HUB — cart engine (localStorage based, works across every page)

const CART_KEY = "snkrshub_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, colorName, size, qty) {
  const cart = getCart();
  const existing = cart.find(
    (item) =>
      item.productId === productId &&
      item.color === colorName &&
      item.size === size
  );
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, color: colorName, size, qty });
  }
  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  if (qty < 1) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = qty;
  }
  saveCart(cart);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function cartLines() {
  return getCart()
    .map((item, index) => {
      const product = getProduct(item.productId);
      if (!product) return null;
      const color = product.colors.find((c) => c.name === item.color) || product.colors[0];
      return {
        index,
        product,
        color,
        size: item.size,
        qty: item.qty,
        lineTotal: product.price * item.qty
      };
    })
    .filter(Boolean);
}

function cartSubtotal() {
  return cartLines().reduce((sum, line) => sum + line.lineTotal, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartCount();
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
