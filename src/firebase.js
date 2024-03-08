// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWsL8aL2E61KUfTCJHDXjk9SUPiZz1m6I",
  authDomain: "chat-app-c31c4.firebaseapp.com",
  projectId: "chat-app-c31c4",
  storageBucket: "chat-app-c31c4.appspot.com",
  messagingSenderId: "388815680410",
  appId: "1:388815680410:web:87513a852faedc78590023",
  measurementId: "G-DNKVJ4SRK3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 //const analytics = getAnalytics(app);

 //export { app, analytics };