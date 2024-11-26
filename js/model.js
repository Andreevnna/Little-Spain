export class Model {
  constructor() {
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
        .catch((err) => {
          console.error('Произошла ошибка загрузки данных', err)
          reject(err)
        })
    })
  }

  filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.category:checked')).map(cb => cb.value);
    const selectedCountries = Array.from(document.querySelectorAll('.country:checked')).map(cb => cb.value);
    return this.data.filter(product => {
      const categoryMatch = selectedCategories.length ? selectedCategories.includes(product.category) : true;
      const countryMatch = selectedCountries.length ? selectedCountries.includes(product.country) : true;
      return categoryMatch && countryMatch;
    });
  }

}