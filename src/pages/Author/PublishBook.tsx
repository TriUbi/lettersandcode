import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PublishWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  margin: "40px auto",
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const PublishBook: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    synopsis: "",
    price: "",
    coverImage: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar la lógica de publicación del libro
    console.log("Datos del libro:", formData);
  };

  return (
    <PublishWrapper elevation={3}>
      <Typography variant="h4" gutterBottom>
        Publicar Nuevo Libro
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Título del Libro"
          variant="outlined"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          label="Sinopsis"
          variant="outlined"
          required
          multiline
          rows={4}
          value={formData.synopsis}
          onChange={(e) =>
            setFormData({ ...formData, synopsis: e.target.value })
          }
        />
        <TextField
          label="Precio"
          variant="outlined"
          required
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          InputProps={{
            startAdornment: (
              <Box component="span" mr={1}>
                $
              </Box>
            ),
          }}
        />
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="cover-image"
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setFormData({ ...formData, coverImage: file });
          }}
        />
        <label htmlFor="cover-image">
          <Button variant="contained" component="span">
            Subir Portada
          </Button>
        </label>
        {formData.coverImage && (
          <Typography variant="body2">
            Archivo seleccionado: {formData.coverImage.name}
          </Typography>
        )}
        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Publicar Libro
          </Button>
        </Box>
      </Form>
    </PublishWrapper>
  );
};

export default PublishBook;
