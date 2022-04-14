import Head from "next/head";
import Link from "next/link";
import {
  NavbarContent,
  NavbarStyled
} from "../components/Navbar/Navbar.styles";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import { HomeStyled } from "../styles/home.styles";
import { icons } from "../styles/globalStyles";

export default function Home() {
  return (
    <Layout>
      <HomeStyled className="center">
        <div className="home_up">
          <div className="home_up_img">
            <img src="/1.png" alt="" />
          </div>
          <div className="home_up_content">
            <header className="home_up_content_header">
              <h3>Пижама для девочек</h3>
              <p className="home_up_content_header_article">Арт. 02765/46</p>
              <div className="home_up_content_header_review">
                <p>Отзывы </p>
                <span className="home_up_content_header_review_rating">
                  {icons.starFill}
                  {icons.starFill}
                  {icons.starFill}
                  {icons.starFill}
                  {icons.star}
                </span>
                <p>14 отэывов</p>
                <span className="home_up_content_header_right">
                  {icons.right}
                </span>
              </div>
            </header>
            <div className="home_up_section">
              <header className="home_up_section_header">
                <div className="home_up_section_header_article">
                  <h3>800 Р</h3>
                  <p>1 500 P</p>
                  <span>{icons.right}</span>
                </div>
                <div className="home_up_section_header_discounts">
                  <p>скидка -36%</p>
                  <p>акция -20%</p>
                </div>
              </header>
            </div>
          </div>
        </div>
      </HomeStyled>
    </Layout>
  );
}
