import styled from "styled-components";

export const SidebarWrapper = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(to bottom, #000, #444);
  color: white;
  padding: 20px;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;

      a {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      &.auth-buttons {
        margin-top: 40px;
        display: none;

        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        button {
          width: 100%;
          justify-content: flex-start;
          padding-left: 0;
          font-size: 1.1rem;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
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
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 999;
`;
