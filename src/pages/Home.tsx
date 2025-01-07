import {
  HomeWrapper,
  VideoBannerWrapper,
  Video,
  ButtonWrapper,
  NeonButton,
} from "../styles/pages/Home.styles";
import heroBanner from "../assets/videos/hero-banner.mp4";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <VideoBannerWrapper>
        <Video autoPlay muted loop>
          <source src={heroBanner} type="video/mp4" />
          Din webbläsare stöder inte videouppspelning.
        </Video>
        <ButtonWrapper>
          <NeonButton variant="contained" onClick={() => navigate("writer")}>
            Autor
          </NeonButton>
          <NeonButton variant="contained" onClick={() => navigate("reader")}>
            Lector
          </NeonButton>
        </ButtonWrapper>
      </VideoBannerWrapper>
    </HomeWrapper>
  );
}
