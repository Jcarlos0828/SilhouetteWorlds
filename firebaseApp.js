// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-wRbXlab5P1fyuX6bKM-b8ShRD3jBac",
  authDomain: "fern-template-3e1e3.firebaseapp.com",
  databaseURL: "https://fern-template-3e1e3-default-rtdb.firebaseio.com",
  projectId: "fern-template-3e1e3",
  storageBucket: "fern-template-3e1e3.appspot.com",
  messagingSenderId: "445471113539",
  appId: "1:445471113539:web:9dc3414964804c81c56ff6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
initializeFirestore(firebaseApp, { ignoreUndefinedProperties: true });

export { firebaseApp };
