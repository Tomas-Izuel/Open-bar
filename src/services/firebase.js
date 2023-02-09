// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9RyHN__38SWIKrLTqrUglmOolttqMvGg",
  authDomain: "tomyizuelcoder.firebaseapp.com",
  projectId: "tomyizuelcoder",
  storageBucket: "tomyizuelcoder.appspot.com",
  messagingSenderId: "977368465906",
  appId: "1:977368465906:web:faeeaaf964d09d9d082b6b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getItems() {
  const productsCollectionRef = collection(db, "products");
  // getDocs(productsCollectionRef).then((snapshot) => {
  //   console.log(snapshot.docs[0].data());
  //   const docsData = snapshot.docs.map((doc) => {
  //     return doc.data();
  //   });
  //   console.log(docsData);
  // });
  const snapshot = await getDocs(productsCollectionRef);
  const docsData = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return docsData;
}

export async function getItemById(id) {
  const productsCollectionRef = collection(db, "products");

  const productRef = doc(productsCollectionRef, id);
  const snapshot = await getDoc(productRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getItemByCategory(category) {
  const productsCollectionRef = collection(db, "products");
  const queryItem = query(
    productsCollectionRef,
    where("category", "==", category)
  );
  const snapshot = await getDocs(queryItem);
  const docsData = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return docsData;
}

export async function getOrdersDesk(deskCode) {
  const date = new Date();
  const productsCollectionRef = collection(db, "orders");
  const queryItem = query(
    productsCollectionRef,
    where("desk", "==", deskCode),
    where("date", "==", date.toLocaleDateString())
  );
  const snapshot = await getDocs(queryItem);
  const docsData = snapshot.docs.map((doc) => {
    const order = {
      id: doc.id,
      isActive: doc.data().isActive,
      time: doc.data().date,
    };
    return { ...order };
  });
  return docsData;
}
