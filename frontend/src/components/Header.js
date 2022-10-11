import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { listProductCategories } from "../actions/productActions";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <header className="Header">
      <img src={require("../assets/HomeStudio.svg")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">

          <Link to="/" onClick={toggleNav}>
            Strona główna          
            </Link>

          <Link to="/products" onClick={toggleNav}>
            Produkty
          </Link>

          <Link to="/pricelist" onClick={toggleNav}>
            Cennik
          </Link>

          <Link to="/contact" onClick={toggleNav}>
            Kontakt
          </Link>

          <Link to="/aboutus" onClick={toggleNav}>
            O nas
          </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Bars">
        <i className="fa fa-bars"></i>
      </button>
    </header >
  );
}