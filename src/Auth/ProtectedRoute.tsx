import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig";

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    // Guardar la ubicación actual para redirigir después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
