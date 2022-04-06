
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS1s2NZ9oTXn9eR36UTJuzWD0ukD1Wf1U",
  authDomain: "ricciardi-coder.firebaseapp.com",
  projectId: "ricciardi-coder",
  storageBucket: "ricciardi-coder.appspot.com",
  messagingSenderId: "877368214679",
  appId: "1:877368214679:web:332f191fd745e5315bd5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}