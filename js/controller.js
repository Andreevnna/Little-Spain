import { View } from "./view.js";
import { Model } from "./model.js";

const view = new View()
const model = new Model()

init()

async function init() {
  await model.loadingData()
  view.displayProducts(model.data)
  addEventListeners()
}
function addEventListeners() {
  view.product.checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', sortingProducts);
  });
}

function sortingProducts() {
  
  const sortingData = model.filterProducts()

  view.displayProducts(sortingData);
}
