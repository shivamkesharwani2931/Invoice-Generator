
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { Home } from "./pages/Home";
import { Templates } from "./pages/Templates";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { CreateInvoice } from "./pages/CreateInvoice";

export const App = () => {
  const location = useLocation();

  // Hide Navbar and Footer on auth and invoice editor pages
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  const isInvoicePage =
    location.pathname === "/create-invoice";

  const hideLayout = isAuthPage || isInvoicePage;

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Invoice Generator */}
        <Route
          path="/create-invoice"
          element={<CreateInvoice />}
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};
