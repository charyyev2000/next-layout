import { NavbarContent, NavbarStyled } from "./Navbar.styles";
import Link from "next/link";
import { icons } from "../../styles/globalStyles";
import { useState } from "react";

const Navbar = ({ inCart, saved, show, navOpen, setNavOpen }) => {
  // const changeNavbar = () => {
  //   console.log(window.scrollY);
  // };

  // window.addEventListener("scroll", changeNavbar);

  return (
    <NavbarStyled show={show}>
      <NavbarContent navOpen={navOpen}>
        <Link href="/">
          <a>
            <h1 className="logo">LOGO</h1>
          </a>
        </Link>
        <div className="navbarRightSection">
          {icons.user}
          {saved ? icons.heartFill : icons.heart}
          <div className="cart">
            {icons.cart} {inCart ? <span className="cartCount">1</span> : ""}
          </div>
          <div onClick={() => setNavOpen(!navOpen)} className="mobileNavbar">
            {navOpen ? icons.close : icons.burger}
          </div>
          {/* {navOpen ? ( */}
          <ul className="mobileNavbarOpen">
            <li>Постельное белье</li>
            <li>одежда для дома</li>
            <li>одежда для улицы</li>
            <li>выход</li>
          </ul>
          {/* ) : (
            ""
          )} */}
        </div>
      </NavbarContent>
    </NavbarStyled>
  );
};

export default Navbar;
