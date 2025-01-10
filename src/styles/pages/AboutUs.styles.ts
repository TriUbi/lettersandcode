import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background-color: #f7f3ef;
  font-family: "Playfair Display", serif;
`;

export const AboutUsHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const AboutUsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  width: 100%;
`;

export const AboutUsSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;
