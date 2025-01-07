import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// Wrapper för hela AuthorPage
export const AuthorWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

// Video Wrapper för att visa video i banner
export const VideoBannerWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "80vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Video i svartvitt
export const Video = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(100%)", // Video i svartvitt
});

// Wrapper för knappar, placerad över videon
export const ButtonWrapper = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  marginTop: "250px", // Justera för att positionera knapparna rätt
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "20px",
});

// Stil för knappar med neoneffekt
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
