import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

const LoginWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  margin: "150px auto",
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate(from, { replace: true });
    } catch (err) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <LoginWrapper elevation={3}>
      <Typography variant="h4" gutterBottom align="center">
        Iniciar Sesión
      </Typography>
      <Form onSubmit={handleLogin}>
        <TextField
          type="email"
          label="Correo electrónico"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          type="password"
          label="Contraseña"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Ingresar
        </Button>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <Box mt={2}>
          <Typography align="center">
            ¿No tienes una cuenta?{" "}
            <Button color="primary" onClick={() => navigate("/signup")}>
              Regístrate aquí
            </Button>
          </Typography>
        </Box>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
