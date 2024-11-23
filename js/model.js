export class Model {
  constructor () {
    this.data = []
  }

  async loadingData() {
    return new Promise((resolve, reject) => {
      fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        this.data = data

        resolve()
      })
    })
    .catch((err) => {
      console.error('Произошла ошибка загрузки данных', err)

      reject(err)
    })
  }
}