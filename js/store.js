
// neginKabul Store Utilities (LocalStorage + Product loading)
const NK_STORAGE_KEY = "nk_cart_v1";
export async function loadProducts(){
  const res = await fetch("./products.json");
  if(!res.ok) throw new Error("Failed to load products.json");
  return await res.json();
}

export function getCart(){
  try{
    return JSON.parse(localStorage.getItem(NK_STORAGE_KEY)) || [];
  }catch(e){
    return [];
  }
}

export function saveCart(cart){
  localStorage.setItem(NK_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(productId, qty=1){
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if(idx >= 0){
    cart[idx].qty += qty;
  }else{
    cart.push({id:productId, qty});
  }
  saveCart(cart);
}

export function updateQty(productId, qty){
  const cart = getCart().map(i => i.id===productId? {...i, qty: Math.max(1, qty)} : i);
  saveCart(cart);
}

export function removeFromCart(productId){
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
}

export function clearCart(){
  localStorage.removeItem(NK_STORAGE_KEY);
}

export async function cartWithDetails(){
  const [products, cart] = await Promise.all([loadProducts(), getCart()]);
  return cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    return {...item, ...p, lineTotal: +(p.price * item.qty).toFixed(2)};
  });
}

export function formatCurrency(v, currency="USD"){
  return new Intl.NumberFormat(undefined, {style:"currency", currency}).format(v);
}
