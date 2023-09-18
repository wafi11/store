import React from "react";
import Navigationbar from './components/navigationBar'
import Home from "./components/home/home";
import Plan from "./components/home/Plan";
import SliderHome from "./components/home/sliderHome" 

function App() {
  return (
    <>
      <Navigationbar />
      <Home />
      <SliderHome />
      <Plan />
    </>
  );
}

export default App;
