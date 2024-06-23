import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
import Website from './screens/Website'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
  <Website/>
    {/* <div className="">
    <Navbar/>
    <Header/>
    </div> */}
    </>
  )
}

export default App
