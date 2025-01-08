import {
  AuthorWrapper,
  VideoBannerWrapper,
  Video,
  ButtonWrapper,
  NeonButton,
} from "../../styles/pages/AuthorPage.styles";
import heroBanner from "../../assets/videos/writerbanner.mp4";
import { useNavigate } from "react-router-dom";

export default function AuthorPage() {
  const navigate = useNavigate();

  return (
    <AuthorWrapper>
      <VideoBannerWrapper>
        <Video
          autoPlay
          muted
          loop
          playsInline
          className="banner-video"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          controls={false}
        >
          <source src={heroBanner} type="video/mp4" />
          Din webbläsare stöder inte videouppspelning.
        </Video>
        <ButtonWrapper>
          <NeonButton
            variant="contained"
            onClick={() => navigate("/writer-profile")}
          >
            Mi Perfil
          </NeonButton>
          <NeonButton variant="contained" onClick={() => navigate("/publish")}>
            Publicar Libro
          </NeonButton>
        </ButtonWrapper>
      </VideoBannerWrapper>
    </AuthorWrapper>
  );
}
