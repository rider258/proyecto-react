
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCKWdbZTMxgkjRZ5FP6DaBCvrA44FR0YlM",
  authDomain: "dshop-c1c9f.firebaseapp.com",
  projectId: "dshop-c1c9f",
  storageBucket: "dshop-c1c9f.appspot.com",
  messagingSenderId: "575473919958",
  appId: "1:575473919958:web:bfb2297422521dcbd52677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);