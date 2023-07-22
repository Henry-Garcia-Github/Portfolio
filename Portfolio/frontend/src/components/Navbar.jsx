import { useState } from "react";
import { AppBar, IconButton, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BgImage from "../assets/background.svg";
import Suprise from "../assets/Surprise.png";

function Navbar() {
  const isTabletOrMobile = useMediaQuery("(max-width: 1025px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  return (
    <AppBar position="static" className="bg-transparent h-20 justify-center">
      <div className="flex justify-around items-center">
        <h3>Henry GARCIA</h3>
        {isTabletOrMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          <>
            <h3>
              <NavLink
                to="/home"
                className="nav-link text-primary-100 no-underline"
              >
                Qui suis je
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/projects"
                className="nav-link text-primary-100 no-underline"
              >
                Selection du projet
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/admin"
                className="nav-link text-primary-100 no-underline"
              >
                Ajouter un projet
              </NavLink>
            </h3>
          </>
        )}
      </div>
      {isTabletOrMobile && isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-no-repeat bg-cover bg-opacity-90 flex flex-col items-center justify-center gap-20 mt-20"
          style={{
            backgroundImage: `url(${BgImage})`,
            zIndex: 999,
          }}
        >
          <img
            className="max-w-full h-auto max-h-96"
            src={Suprise}
            alt="Avatar"
          />
          <NavLink
            to="/home"
            className="nav-link text-primary-100 no-underline text-6xl"
            onClick={handleMenuToggle}
          >
            Qui suis je
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-link text-primary-100 no-underline text-6xl"
            onClick={handleMenuToggle}
          >
            Selection du projet
          </NavLink>
          <NavLink
            to="/admin"
            className="nav-link text-primary-100 no-underline text-6xl"
            onClick={handleMenuToggle}
          >
            Ajouter un projet
          </NavLink>
        </div>
      )}
    </AppBar>
  );
}

export default Navbar;
