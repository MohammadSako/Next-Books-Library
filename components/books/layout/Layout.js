import { Container } from "react-bootstrap";
import Classes from "./index.module.css";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import BackDropSpinner from "../UI/BackdropSpinner";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Layout(props) {
  const spinner = useSelector((state) => state.word.spinner);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (spinner === true) {
      setLoading(true);
    }
    if (spinner === false) {
      setLoading(false);
    }
  }, [spinner]);
  return (
    <div className={Classes.home}>
      <Container>
        {loading && <BackDropSpinner />}

        <header>
          <NavBar />
        </header>
        <main>{props.children}</main>
        <Footer />
      </Container>
    </div>
  );
}

export default Layout;
