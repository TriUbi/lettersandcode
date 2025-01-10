import {
  AboutUsWrapper,
  AboutUsHeader,
  AboutUsContent,
  AboutUsSection,
  SectionTitle,
  SectionText,
} from "../styles/pages/AboutUs.styles";

export default function AboutUs() {
  return (
    <AboutUsWrapper>
      <AboutUsHeader>
        <h1>Sobre Nosotros</h1>
        <p>
          Una plataforma donde las letras y la tecnología se unen para dar vida
          a tus historias.
        </p>
      </AboutUsHeader>
      <AboutUsContent>
        <AboutUsSection>
          <SectionTitle>Nuestra Misión</SectionTitle>
          <SectionText>
            Inspirar a autores y lectores al proporcionar un espacio donde los
            libros y la creatividad puedan florecer en el mundo digital.
          </SectionText>
        </AboutUsSection>
        <AboutUsSection>
          <SectionTitle>Nuestra Historia</SectionTitle>
          <SectionText>
            Fundada por apasionados de la escritura, nuestra plataforma ha
            crecido para convertirse en un hogar para miles de autores y
            lectores en todo el mundo.
          </SectionText>
        </AboutUsSection>
        <AboutUsSection>
          <SectionTitle>Únete a Nosotros</SectionTitle>
          <SectionText>
            Ya seas un autor que busca compartir su historia o un lector en
            busca de la próxima gran aventura, aquí tienes un lugar.
          </SectionText>
        </AboutUsSection>
      </AboutUsContent>
    </AboutUsWrapper>
  );
}
