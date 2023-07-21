import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <main className="grow h-full">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
