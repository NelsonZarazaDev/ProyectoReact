import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8kt8zkBvvCjXPB6ZrZWacUgfK4Ukmblk",
  authDomain: "projectreactmintic.firebaseapp.com",
  projectId: "projectreactmintic",
  storageBucket: "projectreactmintic.firebasestorage.app",
  messagingSenderId: "622220830201",
  appId: "1:622220830201:web:56529980a43ffb996f8928",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };
