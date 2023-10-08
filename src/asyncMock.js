export const getProducts = (category) => {
  return new Promise(resolve => {
    setTimeout(() => {
      fetch('/catalogue.json')
        .then(res => res.json())
        .then(products => {
          category ? 
          resolve(products.filter( product => product.category == category)) 
          : resolve(products)
        })
    }, 20);
  })
}

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      fetch('/catalogue.json')
        .then(res => res.json())
        .then(products => resolve(products.find(product => product.id == id)))
    }, 20);
  })
}
