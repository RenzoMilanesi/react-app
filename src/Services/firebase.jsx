import { initializeApp } from 'firebase/app';
import {
  addDoc,
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD50JBfLOvdW-3BL7N8yzPXrgc2q5pIDk4',
  authDomain: 'react2022-fda33.firebaseapp.com',
  projectId: 'react2022-fda33',
  storageBucket: 'react2022-fda33.appspot.com',
  messagingSenderId: '539628603886',
  appId: '1:539628603886:web:5a1971dac9b974f4aba6ff',
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {
  const colectionProductsRef = collection(DB, 'products');
  const documentSnapshot = await getDocs(colectionProductsRef);
  const documentsData = documentSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

export async function getSingleItem(idParams) {
  const docRef = doc(DB, 'products', idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, 'products');
  const queryCat = query(
    collectionRef,
    where('category', '==', categoryParams)
  );
  const documentSnapshot = await getDocs(queryCat);
  const documentsData = documentSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, 'orders');
  try {
    const docOrder = await addDoc(collectionRef, order);
    return docOrder.id;
  } catch (error) {
    console.error('Error :', error);
  }
}

/* Subir productos en masa
export async function subircosasfirestore(){
  const productos = [
    {
      id: 1,
      title: "Parrilla",
      price: 8900,
      stock: 3,
      category: "Patio",
      imgurl: "/img/parrilla.JPG",
      description: "Parrilla movible con ladrillos reflactarios",
    },
    {
      id: 2,
      title: "Banqueta",
      price: 1800,
      stock: 11,
      category: "Banquetas",
      imgurl: "/img/banqueta-1.JPG",
      description: "Banqueta con retoques",
    },
    {
      id: 3,
      title: "Mesada",
      price: 25000,
      stock: 1,
      category: "Interiores",
      imgurl: "/img/mesada.JPG",
      description: "Mesada de Marmol con espacio para rellenear",
    },
    {
      id: 4,
      title: "Escritorio",
      price: 15000,
      stock: 2,
      category: "Interiores",
      imgurl: "/img/escritorio.JPG",
      description: "Escritorio de metal",
    },
    {
      id: 5,
      title: "Banqueta Ajustable",
      price: 2500,
      stock: 6,
      category: "Banquetas",
      imgurl: "/img/banqueta-2.JPG",
      description: "Banqueta Ajustable",
    },
    {
      id: 6,
      title: "Conjunto Interiores",
      price: 20500,
      stock: 3,
      category: "Interiores",
      imgurl: "/img/conjunto-interiores.JPG",
      description: "Conjunto",
    },
    {
      id: 7,
      title: "Hamaca Personal",
      price: 17000,
      stock: 2,
      category: "Patio",
      imgurl: "/img/hamaca.JPG",
      description: "Hamaca personal max 150kg",
    },
    {
      id: 8,
      title: "Banqueta con Asiento de Tractor",
      price: 7000,
      stock: 2,
      category: "Patio",
      imgurl: "/img/asiento-tractor.JPG",
      description: "Banqueta con asiento de tractor retoque oxidado",
    },
  ];
  const collectionRef=collection(DB,"products")
  for(let item of productos){
    let docOrder= await addDoc(collectionRef,item)
    console.log("Documento Creado, id: ",docOrder.id)
  }
} */
