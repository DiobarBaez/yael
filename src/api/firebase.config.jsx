import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAA88DseJ7RZCk093SSCqwTSOvqUL0pJfU",
  authDomain: "srce-90993.firebaseapp.com",
  projectId: "srce-90993",
  storageBucket: "srce-90993.appspot.com",
  messagingSenderId: "593362595001",
  appId: "1:593362595001:web:47947dc81b8ff21c4c3f68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);