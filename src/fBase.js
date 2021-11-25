// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHAHDm3vGmI2XDa4okZca9mp527h8qMWs",
  authDomain: "react-toytoy-platform.firebaseapp.com",
  projectId: "react-toytoy-platform",
  storageBucket: "react-toytoy-platform.appspot.com",
  messagingSenderId: "955558084980",
  appId: "1:955558084980:web:8e2b073731bf24e46dec21",
  measurementId: "G-SN0WPCJ4MJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authService = getAuth();
