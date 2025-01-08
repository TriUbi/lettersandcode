import {
  ReaderWrapper,
  VideoBannerWrapper,
  Video,
  ButtonWrapper,
  NeonButton,
} from "../../styles/pages/ReaderPage.styles";
import heroBanner from "../../assets/videos/readingbanner.mp4";
import { useNavigate } from "react-router-dom";

export default function ReaderPage() {
  const navigate = useNavigate();

  return (
    <ReaderWrapper>
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
            onClick={() => navigate("/reader-profile")}
          >
            Mi Perfil
          </NeonButton>
          <NeonButton variant="contained" onClick={() => navigate("/books")}>
            Buscar Libros
          </NeonButton>
        </ButtonWrapper>
      </VideoBannerWrapper>
    </ReaderWrapper>
  );
}
