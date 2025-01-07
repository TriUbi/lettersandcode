import styled from "styled-components";

export const SidebarWrapper = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 10;
  left: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(
    135deg,
    #000000,
    #434343
  ); /* Subtil svart gradient */
  color: white;
  padding: 20px;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.5); /* Lätt skugga på höger sida */
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Mörk overlay */
  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 999;
`;
