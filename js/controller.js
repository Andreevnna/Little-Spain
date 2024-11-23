import { View }from "./view.js";
import { Model } from "./model.js";

const view = new View()
const model = new Model()

init()

async function init() {
  await model.loadingData()
  view.renderProducts(model.data)
}