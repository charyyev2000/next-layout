import { FooterContent, FooterStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContent>
        <div className="footer_left section">
          <div>
            <h3>Покупателям</h3>
            <a href="#">Каталог</a>
            <a href="#">Акции</a>
            <a href="#">Бренды</a>
          </div>
          <div>
            <h3>О нас</h3>
            <a href="#">О компании</a>
            <a href="#">Новости</a>
            <a href="#">Команда</a>
          </div>
        </div>
        <div className="footer_right section">
          <h3>УЗНАЙТЕ ПЕРВЫМИ О НОВИНКАХ И АКЦИИ</h3>
          <form>
            <input type="text" placeholder="Адрес электронной почты" />
            <button>Подписаться</button>
          </form>
        </div>
      </FooterContent>
    </FooterStyled>
  );
};

export default Footer;
