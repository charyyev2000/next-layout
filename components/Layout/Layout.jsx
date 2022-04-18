import Head from "next/head";
import { useRouter } from "next/router";
import { GlobalStyle } from "../../styles/globalStyles";
import Footer from "../Footer/Footer";
// import { GlobalStyle } from "../../styles/global.styles";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { LayoutStyled, MainContainer } from "./Layout.styles";
// import Navbar from "../Navbar/Navbar";
// import { LayoutStyled, MainContainer } from "./Layout.styles";

function Layout({ title, children, ...props }) {
  const router = useRouter();
  const handelScrolls = () => {
    console.log("scroll");
  };

  return (
    <>
      <GlobalStyle />
      <LayoutStyled {...props}>
        <Head>
          <title>
            {" "}
            HTML верстальщик test {title ? title : router.pathname}
          </title>
          <meta
            name="description"
            content="Alef Development HTML верстальщик test Myrat Charyyev"
          />
          <meta
            name="keywords"
            content="Alef Development, HTML верстальщик, "
          />
        </Head>
        {/* <Navbar /> */}
        <MainContainer className="center">{children}</MainContainer>
        <Footer />
      </LayoutStyled>
    </>
  );
}

export default Layout;
