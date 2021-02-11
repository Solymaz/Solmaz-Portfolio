import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useMutationObserver from "@rooks/use-mutation-observer";
import MenuItems from "./components/MenuItems";
import "./navbar.css";

const variants = {
  open: { opacity: 1 },
  closed: {
    opacity: 0,
  },
};

const Navbar = () => {
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const [menuShown, setMenuShown] = useState(false);
  const location = useLocation();

  const hideMenu = () => {
    const opacity = parseFloat(navRef.current.style.opacity);
    if (opacity === 0.0) {
      menuRef.current.style.display = "none";
    } else {
      menuRef.current.style.display = "grid";
    }
  };

  useMutationObserver(navRef, hideMenu);

  // Hide mobile navigation bar when changing page
  useEffect(() => {
    if (menuShown) {
      setMenuShown(false);
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [location]);

  return (
    <nav className="navbar">
      <NavLink to="/" exact>
        <img src="logo.jpg" className="logo" alt="logo" />
      </NavLink>
      <div className="menu" onClick={() => setMenuShown(!menuShown)}>
        {menuShown ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <motion.nav
        className="topNav"
        initial={false}
        animate={menuShown ? "open" : "closed"}
        variants={variants}
        ref={navRef}
      >
        <MenuItems menuRef={menuRef} />
      </motion.nav>
      <div className="sidebarNav">
        <MenuItems />
      </div>
    </nav>
  );
};
export default Navbar;
