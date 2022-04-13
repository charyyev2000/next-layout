import { NavbarContent, NavbarStyled } from "./Navbar.styles";
import Link from "next/link";
import { icons } from "../../styles/globalStyles";

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarContent>
        <Link href="/">
          <a>
            <h1 className="logo">LOGO</h1>
          </a>
        </Link>
        <div className="navbarRightSection">
          {icons.user}
          {icons.heart}
          {icons.cart}
        </div>
      </NavbarContent>
    </NavbarStyled>
  );
};

export default Navbar;
