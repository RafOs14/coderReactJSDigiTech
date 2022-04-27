import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeqzv-Tkm_ZMB9ceGUdti9KYWDD2WyPvo",
  authDomain: "coderreact-digitech.firebaseapp.com",
  projectId: "coderreact-digitech",
  storageBucket: "coderreact-digitech.appspot.com",
  messagingSenderId: "938547869877",
  appId: "1:938547869877:web:0686842325b337ec5ca6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;