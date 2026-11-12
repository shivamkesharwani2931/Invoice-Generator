
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import { PrivateRoute } from "./Components/PrivateRoute";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Templates } from "./pages/Templates";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const App = () => {
  const location = useLocation();

  // Hide Navbar on authentication pages
  const hideNavbar = ["/login", "/signup"].includes(
    location.pathname
  );

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route path="/templates" element={<Templates />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
