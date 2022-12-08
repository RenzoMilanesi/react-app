
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,  
    query,
    where
  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD50JBfLOvdW-3BL7N8yzPXrgc2q5pIDk4",
  authDomain: "react2022-fda33.firebaseapp.com",
  projectId: "react2022-fda33", 
  storageBucket: "react2022-fda33.appspot.com",
  messagingSenderId: "539628603886",
  appId: "1:539628603886:web:5a1971dac9b974f4aba6ff"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);


export default async function getItems() {
    const colectionProductsRef = collection(DB, "products");
    const documentSnapshot = await getDocs(colectionProductsRef);
    const documentsData = documentSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return documentsData;
  }

  export async function getSingleItem(idParams) {
    const docRef = doc(DB, "products", idParams);
  
    const docSnapshot = await getDoc(docRef);
  
    const itemData = docSnapshot.data();
    itemData.id = docSnapshot.id;
  
    return itemData;
  }


  export async function getItemsByCategory(categoryParams) {
    const collectionRef = collection(DB, "products");   
    const queryCat = query(collectionRef, where("category", "==",categoryParams ))
    const documentSnapshot = await getDocs(queryCat);
    const documentsData = documentSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return documentsData;
  }