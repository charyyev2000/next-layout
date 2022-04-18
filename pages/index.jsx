import Head from "next/head";
import Link from "next/link";
import {
  NavbarContent,
  NavbarStyled,
} from "../components/Navbar/Navbar.styles";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import { HomeDownContent, HomeStyled } from "../styles/home.styles";
import { icons } from "../styles/globalStyles";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [bgPic, setBgPic] = useState(1);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState("Добавить в корзину");
  const [saved, setSaved] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log(scrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToCart = () => {
    if (cart === "Добавить в корзину") {
      setCart("Добавлень в корзину");
    }
  };

  let inCart = cart === "Добавить в корзину" ? false : true;

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Layout onScroll={handleScroll}>
      <Navbar
        inCart={inCart}
        saved={saved}
        show={show}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <HomeStyled className="center" onClick={() => setNavOpen(false)}>
        <div className="home_up">
          <div className="home_up_img">
            {/* make parent div position relative */}
            <img
              src={`/homeUpImg/${bgPic}.png`}
              alt="first"
              className="main_img"
              // layout="fill"
              // objectFit="contain"
            />

            <div className="images">
              <img src="/homeUpImg/1.png" alt="" onClick={() => setBgPic(1)} />
              <img src="/homeUpImg/2.png" alt="" onClick={() => setBgPic(2)} />
              <img src="/homeUpImg/3.png" alt="" onClick={() => setBgPic(3)} />
              <img src="/homeUpImg/4.png" alt="" onClick={() => setBgPic(4)} />
              <img src="/homeUpImg/5.png" alt="" onClick={() => setBgPic(5)} />
            </div>
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
                  <h3>800 ₽</h3>
                  <p>1 500 ₽</p>
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
                    <button onClick={increment}>+</button>
                    <p>{count}</p>
                    <button onClick={decrement}>-</button>
                  </div>
                  <button
                    className="addToCart"
                    onClick={addToCart}
                    disabled={inCart}
                  >
                    {cart}
                  </button>
                  <button className="save" onClick={() => setSaved(!saved)}>
                    {saved ? icons.heartFill : icons.heart}
                  </button>
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

        <a
          href="#"
          style={{
            display: "block",
            width: "200px",
            margin: "30px auto",
          }}
        >
          Посмотрети все стили
        </a>

        <HomeDownContent>
          <img src="/homeDownImg/content.png" alt="" className="main_img" />
          <div className="home_down_images">
            <img src="/homeDownImg/content2.png" alt="" />
            <img src="/homeDownImg/content3.png" alt="" />
            <img src="homeDownImg/content4.png" alt="" />
            <img src="/homeDownImg/content5.png" alt="" />
          </div>
        </HomeDownContent>

        {/* <Footer></Footer> */}
      </HomeStyled>
    </Layout>
  );
}
