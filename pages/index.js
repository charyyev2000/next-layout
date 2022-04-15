import Head from "next/head";
import Link from "next/link";
import {
  NavbarContent,
  NavbarStyled,
} from "../components/Navbar/Navbar.styles";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import { HomeStyled } from "../styles/home.styles";
import { icons } from "../styles/globalStyles";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bgPic, setBgPic] = useState(2);

  return (
    <Layout>
      <HomeStyled className="center">
        <div className="home_up">
          <div className="home_up_img">
            {/* make parent div position relative */}
            <Image
              src={`/${bgPic}.png`}
              alt="first"
              layout="fill"
              objectFit="contain"
            />

            <img
              src="/1.png"
              alt=""
              className="tinyImg"
              onClick={() => setBgPic(3)}
            />
            <img
              src="/2.png"
              alt=""
              className="tinyImg second"
              onClick={() => setBgPic(3)}
            />
            <img
              src="/3.png"
              alt=""
              className="tinyImg third"
              onClick={() => setBgPic(3)}
            />
            <img
              src="/4.png"
              alt=""
              className="tinyImg fourth"
              onClick={() => setBgPic(3)}
            />
            <img
              src="/5.png"
              alt=""
              className="tinyImg fifth"
              onClick={() => setBgPic(3)}
            />
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
              <div className="home_up_section_content">
                <select
                  name="Выбрать размер"
                  defaultValue="Выбрать размер"
                  id=""
                  placeholder="Выбрать размер"
                >
                  <option value="Выбрать размер">Выбрать размер</option>
                </select>
                <div>
                  <a href="#">Определить размер</a>
                </div>

                <div className="home_up_section_content_buttons">
                  <div className="counter">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                  <button className="addToCart">Добавить в корзину</button>
                  <button className="save">{icons.heart}</button>
                </div>
                <div>
                  <a href="#">Купить в 1 клик</a>
                </div>
              </div>
            </div>

            <hr />

            <footer className="home_up_content_footer">
              <div>
                {icons.clothes}
                <a href="#">Описание товара</a>
              </div>
              <div>
                {icons.clock}
                <a href="#">Доставка и возврат</a>
              </div>
              <div>
                {icons.card}
                <a href="#">Способы оплаты</a>
              </div>
            </footer>
          </div>
        </div>
      </HomeStyled>
    </Layout>
  );
}
