import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const AuthorWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const VideoBannerWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "80vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Video = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(100%)",
});

export const ButtonWrapper = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  marginTop: "250px",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "20px",
});

export const NeonButton = styled(Button)({
  backgroundColor: "#333",
  color: "#fff",
  fontSize: "1.2rem",
  padding: "10px 35px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#444",
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.3)",
  },
  "&:active": {
    transform: "scale(0.95)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
});
