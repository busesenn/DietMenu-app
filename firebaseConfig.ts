import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCv1e2ccjVeULqObnLxR177w9_Mj1zNo90",
    authDomain: "dietmenu-9f69d.firebaseapp.com",
    projectId: "dietmenu-9f69d",
    storageBucket: "dietmenu-9f69d.firebasestorage.app",
    messagingSenderId: "138819821067",
    appId: "1:138819821067:web:48653e427e87404534710e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;