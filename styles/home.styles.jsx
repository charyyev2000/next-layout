import styled from "styled-components";
import { colors, GlobalStyle } from "./globalStyles";

export const HomeStyled = styled.article`
  height: 100%;
  margin: 0 auto;
  //   background: #333;

  .home_up {
    // width: 100%;
    display: flex;
    padding-top: 20px;
    // align-items: center;
    height: 923px;

    &_img {
      width: 50%;
      height: 100%;
    }

    &_content {
      width: 50%;
      padding: 30px;

      &_header {
        display: flex;
        flex-direction: column;

        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          margin: 10px 10px;
        }

        &_article {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.04em;
          margin: 0px 10px;
          opacity: 0.5;
        }

        &_review {
          display: flex;
          align-items: center;
          line-height: 10px;
          margin: 20px 0px;

          p {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            margin: 0px 10px;
            margin-right: 5px;
            letter-spacing: 0.04em;
          }
        }
      }
    }

    &_section {
      &_header {
        &_article {
          display: flex;
          align-items: center;

          h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            margin: 0px 10px;
          }

          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.04em;
            text-decoration-line: line-through;
            margin: 0 10px;
            opacity: 0.5;
          }
        }

        &_discounts {
          display: flex;

          p {
            padding: 3px 10px;
            border: 1px solid ${colors.secondary};
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            margin: 10px 10px 10px 10px;
          }
        }
      }
    }
  }
`;
