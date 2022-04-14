import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const NavbarStyled = styled.nav`
  width: 100vw;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  background: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavbarContent = styled.div`
  max-width: 1390px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbarRightSection {
    svg {
      font-size: clamp(1rem, 5vw, 1.5rem);
      margin-left: 30px;
      cursor: pointer;
    }
  }
`;
