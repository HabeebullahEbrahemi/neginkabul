
export function renderHeader(active=""){
  return `
  <header>
    <div class="container nav">
      <a class="brand" href="./index.html">
        <img src="./assets/logo.png" alt="neginKabul"/>
        <span>neginKabul</span>
      </a>
      <nav>
        <a class="${active==='home'?'active':''}" href="./index.html">Home</a>
        <a class="${active==='products'?'active':''}" href="./products.html">Products</a>
        <a class="${active==='about'?'active':''}" href="./about.html">About</a>
        <a class="${active==='contact'?'active':''}" href="./contact.html">Contact</a>
        <a href="./cart.html" class="btn">Cart</a>
      </nav>
    </div>
  </header>`
}

export function renderFooter(){
  const year = new Date().getFullYear();
  return `
  <footer>
    <div class="container foot">
      <div>
        <div class="brand"><img src="./assets/logo.png" alt="logo"/><span>neginKabul</span></div>
        <p class="muted">Quality Afghan goods — rugs, jewelry, and gourmet items.</p>
      </div>
      <div>
        <p>&copy; ${year} neginKabul. All rights reserved.</p>
      </div>
    </div>
  </footer>`
}
