export class View {
  constructor() {

  }
  product = {
    productList: document.querySelector('.product'),
    checkboxes: document.querySelectorAll('.category, .country')
    // sortCategorySelect: document.querySelector('#sortCategory'),
    // sortCountrySelect: document.querySelector('#sortCountry'),
    // sortOrderSelect: document.querySelector('#sortOrder')
  }

  displayProducts(filteredProducts) {
    this.product.productList.innerHTML = '';
    filteredProducts.forEach(product => {
      const markup = `<div class="product__card">
        <div class="product__img">
          <img src="./images/${product.images}" alt="">
        </div>
        <div class="product__description">
          <div class="product__name">
            <h5>${product.name}</h5>
          </div>
          <div class="product__price">
            <p>${product.description}</p>
            <p class="price"><span class="sm">${product.wt} г/</span>${product.price} <span class="currency">руб.</span></p>
          </div>
        </div>
      </div>`
      this.product.productList.insertAdjacentHTML('afterbegin', markup)
    });
  }
}
