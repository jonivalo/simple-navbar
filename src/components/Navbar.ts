export function createNavbar(): string {
  return `
    <div class="hamburger" id="hamburger">&#9776;</div>
    <div id="navbar">
      <a href="#" data-page="home">Home</a>
      <a href="#" data-page="news">News</a>
      <a href="#" data-page="contact">Contact</a>
      <a href="#" data-page="form">Form</a>
      <div class="dropdown">
        <button class="dropbtn">Products</button>
        <div class="dropdown-content">
          <a href="#" data-page="product1">Product 1</a>
          <a href="#" data-page="product2">Product 2</a>
          <a href="#" data-page="product3">Product 3</a>
        </div>
      </div>
    </div>
  `;
}