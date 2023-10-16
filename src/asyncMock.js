import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from './firebaseConfig';

export const getProducts = (category) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productsCollection = category 
      ?
      query(collection(db, 'items'), where('category', '==', category))
      :
      collection(db, 'items')
      getDocs(productsCollection).then(res => {
        const products = res.docs.map(doc => ({id:doc.id, ...doc.data()}))
        resolve(products)
      })
    }, 20);
  })
}

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const itemRef = doc(db, 'items', id)
      getDoc(itemRef).then(item => resolve({id:item.id, ...item.data()}))
    }, 20);
  })
}
