import {Routes,Route} from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


import {Home} from "./pages/Home"
import {Templates} from "./pages/Templates"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Login} from "./pages/Login"
import {Signup} from "./pages/Signup"

export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer/>
    </>
  )
}