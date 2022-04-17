import styled from "styled-components";
import { colors, GlobalStyle } from "./globalStyles";

export const HomeStyled = styled.article`
  height: 100%;
  margin: 0 auto;
  //   background: #333;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    // text-decoration: none;
    margin: 0 10px;
    display: inline;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
    -ms-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  .home_up {
    // width: 100%;
    display: flex;
    padding-top: 20px;
    height: 923px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 100%;
    }

    &_img {
      position: relative;
      width: 50%;
      height: 923px;
      overflow: hidden;
      z-index: 10;

      @media screen and (max-width: 768px) {
        width: 100%;
        // height: 1000px;
        // min-height: 100%;
      }

      .main_img {
        max-width: 100%;
        min-height: 100%;
        position: relative;
        // object-fit: cover;
        // z-index: 100;
      }

      .images {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 40px;
        left: 50px;

        img {
          margin: 10px;
          width: clamp(50px, 5vw, 70px);
          cursor: pointer;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
        }

        @media screen and (max-width: 768px) {
          top: 10px;

          // img {
          //   margin: 10px;
          // }
        }
      }
    }

    &_content {
      width: 50%;
      padding: 30px;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

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
          margin: 30px 0px;

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

      hr {
        width: 100%;
        // border: 0.5px solid #c4c4c4;
        max-height: 0.5px;
        background: red;
        margin: 20px 0;
      }

      &_footer {
        margin: 10px;

        div {
          display: flex;
          align-items: center;
          font-size: 18px;
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
            margin-top: 15px;
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

      &_content {
        display: flex;
        flex-direction: column;

        select {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          border-radius: 0;
          background: none;
          border: 1px solid ${colors.secondary};
          padding: 10px;
          margin: 10px;
          margin-top: 20px;
          width: 300px;
        }

        &_buttons {
          display: flex;
          // align-items: center;
          // background: red;

          .addToCart {
            padding: 12px 28px;
            background: ${colors.secondary};
            color: ${colors.primary};
            border: none;
            outline: none;
            margin: 10px;
            cursor: pointer;
            transition: box-shadow 0.3s ease;
            -webkit-transition: box-shadow 0.3s ease;
            -moz-transition: box-shadow 0.3s ease;
            -ms-transition: box-shadow 0.3s ease;
            -o-transition: box-shadow 0.3s ease;

            &:hover {
              box-shadow: 0px 10px 10px ${colors.secondary};
            }
          }

          .save {
            width: 44px;
            height: 44px;
            margin: 10px 4px;
            border-radius: 0;
            font-size: 24px;
            border: none;
            outline: none;
            background: ${colors.secondary};
            color: ${colors.primary};
            cursor: pointer;
            transition: box-shadow 0.3s ease;
            -webkit-transition: box-shadow 0.3s ease;
            -moz-transition: box-shadow 0.3s ease;
            -ms-transition: box-shadow 0.3s ease;
            -o-transition: box-shadow 0.3s ease;

            &:hover {
              box-shadow: 0px 10px 10px ${colors.secondary};
            }
          }

          .counter {
            display: flex;
            width: 145px;
            height: 44px;
            background: #f2f2f2;
            margin: 10px;

            p {
              width: 100%;
              text-align: center;
              line-height: 44px;
              font-weight: 400;
              font-size: 14px;
            }

            button {
              width: 100%;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              background: none;
              border: none;
              outline: none;
              cursor: pointer;
              transition: background 0.3s ease;
              -webkit-transition: background 0.3s ease;
              -moz-transition: background 0.3s ease;
              -ms-transition: background 0.3s ease;
              -o-transition: background 0.3s ease;

              &:hover {
                background: ${colors.secondary};
                color: ${colors.primary};
              }
            }
          }
        }
      }
    }
  }
`;

export const HomeDownContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .main_img {
    width: 50%;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
      margin-right: 0;
    }
  }

  .home_down_images {
    width: 50%;
    // height: 300px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    img {
      width: 100%;
      // height: 100px;
    }
  }
`;
