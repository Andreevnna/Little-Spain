export class View {
  constructor () {

  }
  product = {
    productList: document.querySelector('.product')
  }
  renderProducts (arrayData) {
    arrayData.forEach(product => {
      const markup = `<div class="product__card">
      <div class="product__img">
        <img src="./images/${product.images}" alt="">
      </div>
      <h3>${product.name}</h3>
      <span>${product.price}</span>
      <p>${product.description}</p>
      </div>`

      this.product.productList.insertAdjacentHTML('afterbegin', markup)
    });
  }
}
