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
  // transform: translateY(${(props) => (props.show ? "40px" : "-40px")});
  transition: transform 0.3s ease;
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

    .cart {
      display: inline-flex;
      position: relative;
      // background: green;

      .cartCount {
        position: absolute;
        top: 0;
        left: 50%;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: red;
        color: white;
        text-align: center;
        font-size: 12px;
      }
    }

    .mobileNavbar {
      display: none;
      z-index: 200;

      @media screen and (max-width: 768px) {
        display: inline-flex;
      }
    }

    .mobileNavbarOpen {
      position: fixed;
      top: 40px;
      left: 0;
      width: 100vw;
      height: 250px;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 20px;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
      transform: translateY(
        ${(props) => (props.navOpen ? 0 : "calc(-100% - 60px)")}
      );
      -webkit-transform: ${(props) =>
        props.navOpen ? 0 : "calc(-100% - 60px)"};
      -moz-transform: ${(props) => (props.navOpen ? 0 : "calc(-100% - 60px)")};
      -ms-transform: ${(props) => (props.navOpen ? 0 : "calc(-100% - 60px)")};
      -o-transform: ${(props) => (props.navOpen ? 0 : "calc(-100% - 60px)")};
      transition: transform 0.3s ease;
      -webkit-transition: transform 0.3s ease;
      -moz-transition: transform 0.3s ease;
      -ms-transition: transform 0.3s ease;
      -o-transition: transform 0.3s ease;
      z-index: 200;

      // @media screen and(min-width: 768px) {
      //   display: none;
      // }

      li {
        text-transform: uppercase;
        font-size: 22px;
        list-style: none;
        cursor: pointer;
        // margin: 10px 20px;
      }
    }
  }
`;
