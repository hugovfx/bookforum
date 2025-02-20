// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmoNRaOH3kxlv8bs_QI7Vpa76H6i8JM3Q",
  authDomain: "bookforum-22a5d.firebaseapp.com",
  projectId: "bookforum-22a5d",
  storageBucket: "bookforum-22a5d.appspot.com",
  messagingSenderId: "774830785375",
  appId: "1:774830785375:web:732dcf34ec46a3fed92cea",
  measurementId: "G-PME9EFR1K6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };
