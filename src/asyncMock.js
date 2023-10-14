import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'

export const getProducts = (category) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const db = getFirestore()
      const productsCollection = collection(db, 'items')
      getDocs(productsCollection).then(res => {
        const products = res.docs.map(doc => ({id:doc.id, ...doc.data()}))
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
      const db = getFirestore()
      const itemRef = doc(db, 'items', id)
      getDoc(itemRef).then(item => resolve({id:item.id, ...item.data()}))
    }, 20);
  })
}
