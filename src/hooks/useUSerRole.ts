import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

export const useUserRole = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        const claims = idTokenResult.claims as { role?: string };
        setRole(claims.role || null);
      }
    };

    fetchUserRole();
  }, []);

  return role;
};
