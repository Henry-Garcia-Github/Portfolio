import { useState } from "react";
import { AppBar, IconButton, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const isTabletOrMobile = useMediaQuery("(max-width: 1025px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  return (
    <AppBar position="static" className="bg-transparent h-20 justify-center">
      <div className="flex justify-around items-center">
        <h3>{isTabletOrMobile ? "Henry GARCIA" : "Henry GARCIA"}</h3>
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
        <div className="fixed top-20 left-0 w-full bg-white p-4 flex flex-col">
          <NavLink
            to="/home"
            className="nav-link text-primary-100 no-underline"
          >
            Qui suis je
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-link text-primary-100 no-underline"
          >
            Selection du projet
          </NavLink>
          <NavLink
            to="/admin"
            className="nav-link text-primary-100 no-underline"
          >
            Ajouter un projet
          </NavLink>
        </div>
      )}
    </AppBar>
  );
}

export default Navbar;
