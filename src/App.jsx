import { Outlet } from "react-router-dom";
import NavigationBar from "./Componentes/Navbar/Navbar";
import React from 'react';
// import Footer from "./Componentes/Footer/Footer";
import Footer from "./Componentes/Footer/Footer";

function App() {
  return (
    <>
      {/* <Header />
      <Outlet />
      <Footer/> */}
      <NavigationBar/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
