// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-tlhcInx5o9jx1vINlVbAfFKJZ9KF68",
  authDomain: "silhouette-of-worlds.firebaseapp.com",
  projectId: "silhouette-of-worlds",
  storageBucket: "silhouette-of-worlds.appspot.com",
  messagingSenderId: "561002087999",
  appId: "1:561002087999:web:b8d378701cda963ec49a8a",
  measurementId: "G-1D7CJRS0GG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeFirestore } from "firebase/firestore";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCq-tlhcInx5o9jx1vINlVbAfFKJZ9KF68",
//   authDomain: "silhouette-of-worlds.firebaseapp.com",
//   // databaseURL: "https://fern-template-3e1e3-default-rtdb.firebaseio.com",
//   projectId: "silhouette-of-worlds",
//   storageBucket: "silhouette-of-worlds.appspot.com",
//   messagingSenderId: "561002087999",
//   appId: "1:561002087999:web:b8d378701cda963ec49a8a",
//   measurementId: "G-1D7CJRS0GG",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// initializeFirestore(firebaseApp, { ignoreUndefinedProperties: true });

// export { firebaseApp };
