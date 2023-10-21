import { db } from './firebaseConfig';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore'

export const getProducts = (category) => {
  return new Promise(resolve => {
    const productsCollection = category 
    ?
      query(collection(db, 'items'), where('category', '==', category))
    :
      collection(db, 'items')
    getDocs(productsCollection).then(res => {
      const products = res.docs.map(doc => ({id:doc.id, ...doc.data()}))
      resolve(products)
    })
  })
}

export const getProductById = (id) => {
  return new Promise(resolve => {
    const itemRef = doc(db, 'items', id)
    getDoc(itemRef).then(item => resolve({id:item.id, ...item.data()}))
  })
}
