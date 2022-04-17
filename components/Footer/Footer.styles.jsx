import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const FooterStyled = styled.footer`
  width: 100vw;
  height: 184px;
  margin: 50px 0;
`;

export const FooterContent = styled.div`
  max-width: 1390px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h3 {
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondary};
    margin-bottom: 10px;
  }

  .section {
    padding: 50px 100px;
    width: 50%;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }
  }

  .footer_left {
    // background: red;
    display: flex;
    align-items: center;

    div {
      width: 50%;
      display: flex;
      flex-direction: column;

      a {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .footer_right {
    // background: green;

    input {
      display: block;
      border: none;
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid #c4c4c4;
    }
    button {
      float: right;
      font-size: 14px;
      line-height: 20px;
      padding: 5px 15px;
      margin-top: 20px;
      border-radius: 0;
      background: none;
      border: 1px solid ${colors.secondary};
    }
  }
`;
