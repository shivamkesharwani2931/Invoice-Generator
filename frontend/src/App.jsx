import {Routes,Route} from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


import {Home} from "./pages/Home"

export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
  )
}