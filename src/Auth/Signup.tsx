import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import { registerUser } from "../Auth/authHelpers";

const SignupWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  margin: "150px auto",
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "reader" as "reader" | "author",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await registerUser(formData.email, formData.password, formData.role);
      navigate("/");
    } catch (err) {
      setError("Error al registrar usuario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <SignupWrapper elevation={3}>
      <Typography variant="h4" gutterBottom align="center">
        Crear Cuenta
      </Typography>
      <Form onSubmit={handleSignup}>
        <TextField
          type="email"
          label="Correo electrónico"
          variant="outlined"
          required
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          type="password"
          label="Contraseña"
          variant="outlined"
          required
          fullWidth
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <TextField
          type="password"
          label="Confirmar Contraseña"
          variant="outlined"
          required
          fullWidth
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Tipo de Usuario</FormLabel>
          <RadioGroup
            row
            value={formData.role}
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value as "reader" | "author",
              })
            }
          >
            <FormControlLabel
              value="reader"
              control={<Radio />}
              label="Lector"
            />
            <FormControlLabel
              value="author"
              control={<Radio />}
              label="Escritor"
            />
          </RadioGroup>
        </FormControl>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Registrarse
        </Button>
        <Box mt={2}>
          <Typography align="center">
            ¿Ya tienes una cuenta?{" "}
            <Button color="primary" onClick={() => navigate("/login")}>
              Inicia sesión aquí
            </Button>
          </Typography>
        </Box>
      </Form>
    </SignupWrapper>
  );
};

export default Signup;
