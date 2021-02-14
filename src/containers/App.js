import React from "react";
import Endless from "./Endless";
// router
import { BrowserRouter } from "react-router-dom"
// toastify
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <BrowserRouter>
      <Endless />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
