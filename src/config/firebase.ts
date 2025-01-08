import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Reemplaza esto con tu configuración real de Firebase
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias que necesitamos
export const db = getFirestore(app);
export const auth = getAuth(app);
