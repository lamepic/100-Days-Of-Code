// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUDloK3_aoCd9DSkSuQ14RuopVDzfu-8w",
  authDomain: "spotify-clone-93b2b.firebaseapp.com",
  databaseURL: "https://spotify-clone-93b2b.firebaseio.com",
  projectId: "spotify-clone-93b2b",
  storageBucket: "spotify-clone-93b2b.appspot.com",
  messagingSenderId: "923101153103",
  appId: "1:923101153103:web:c3ef426b01b872bb2fe73a",
  measurementId: "G-ZPP7BHMHK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
