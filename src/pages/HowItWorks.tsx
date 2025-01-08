import {
  HowItWorksWrapper,
  SectionWrapper,
  SectionTitle,
  SectionContent,
  StepsRow,
  StepCard,
  StepTitle,
  StepDescription,
  StepIcon,
} from "../styles/pages/HowItWorks.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faShoppingCart,
  faCreditCard,
  faUser,
  faUpload,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  return (
    <HowItWorksWrapper>
      <SectionWrapper>
        <SectionTitle>¿Cómo funciona nuestra plataforma?</SectionTitle>
        <SectionContent>
          <p>
            Nuestra plataforma permite tanto a autores como a lectores disfrutar
            de una experiencia única. Los autores pueden publicar sus libros, y
            los lectores pueden comprarlos fácilmente. ¡Todo está a tu alcance!
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Pasos para Comprar un Libro</SectionTitle>
        <StepsRow>
          <StepCard>
            <StepIcon>
              <FontAwesomeIcon icon={faBook} />
            </StepIcon>
            <StepTitle>Navegar por los Libros</StepTitle>
            <StepDescription>
              Explora nuestra amplia colección de libros en diferentes géneros.
            </StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </StepIcon>
            <StepTitle>Añadir al Carrito</StepTitle>
            <StepDescription>
              Añade los libros que desees comprar a tu carrito.
            </StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>
              <FontAwesomeIcon icon={faCreditCard} />
            </StepIcon>
            <StepTitle>Realizar el Pago</StepTitle>
            <StepDescription>
              Realiza el pago de forma rápida y segura utilizando las opciones
              disponibles.
            </StepDescription>
          </StepCard>
        </StepsRow>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Pasos para Publicar un Libro</SectionTitle>
        <StepsRow>
          <StepCard>
            <StepIcon>
              <FontAwesomeIcon icon={faUser} />
            </StepIcon>
            <StepTitle>Crear una Cuenta</StepTitle>
            <StepDescription>
              Regístrate como autor y crea tu perfil en la plataforma.
            </StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>
              <FontAwesomeIcon icon={faUpload} />
            </StepIcon>
            <StepTitle>Subir el Libro</StepTitle>
            <StepDescription>
              Sube tu libro, incluyendo título, autor, sinopsis y portada.
            </StepDescription>
          </StepCard>
          <StepCard>
            <StepIcon>
              <FontAwesomeIcon icon={faCheck} />
            </StepIcon>
            <StepTitle>Publicar</StepTitle>
            <StepDescription>
              Publica tu libro y empieza a recibir ventas de lectores
              interesados.
            </StepDescription>
          </StepCard>
        </StepsRow>
      </SectionWrapper>
    </HowItWorksWrapper>
  );
}
