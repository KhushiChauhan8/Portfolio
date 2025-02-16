// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc };


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // ✅ Firebase Analytics add kiya

// ✅ Tumhare naye Firebase project ka configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPgYwV9DcXWIK3_0YseyC5nEXtqWoqWcw",
  authDomain: "myportfolioprojects-e45ba.firebaseapp.com",
  projectId: "myportfolioprojects-e45ba",
  storageBucket: "myportfolioprojects-e45ba.firebasestorage.app",
  messagingSenderId: "765497304581",
  appId: "1:765497304581:web:7baceb8bd37ee6e5bfde6c",
  measurementId: "G-HVQN102Z03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app); // ✅ Analytics initialize kiya

export { db, collection, addDoc, analytics };
