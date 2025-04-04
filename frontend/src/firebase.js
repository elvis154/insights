import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDA0EBRkKkPUHLWj-qsQiXQuADhCVli2Q",
  authDomain: "lrtiwari-fbac1.firebaseapp.com",
  projectId: "lrtiwari-fbac1",
  storageBucket: "lrtiwari-fbac1.firebasestorage.app",
  messagingSenderId: "412185969103",
  appId: "1:412185969103:web:514c7455f5047b87cfd2ba",
  measurementId: "G-SQ644BG642"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

