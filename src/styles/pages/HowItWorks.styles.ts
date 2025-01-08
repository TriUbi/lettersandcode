import styled from "styled-components";

// Wrapper principal para la página "Cómo Funciona"
export const HowItWorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

// Wrapper para cada sección
export const SectionWrapper = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// Título de la sección
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

// Contenido de la sección (texto explicativo)
export const SectionContent = styled.div`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;

  p {
    line-height: 1.6;
  }
`;

// Contenedor de las cards de pasos
export const StepsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

// Estilo para cada card de paso
export const StepCard = styled.div`
  background-color: #fff;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Contenedor del ícono del paso
export const StepIcon = styled.div`
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Título del paso
export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

// Descripción del paso
export const StepDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  text-align: center;
`;
