import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export const registerUser = async (
  email: string,
  password: string,
  role: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: role,
    });

    console.log("Usuario registrado correctamente con rol:", role);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
};
