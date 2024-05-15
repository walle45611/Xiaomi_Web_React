import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Footer/Footer";
import AllNav from "./AllNav/AllNav";
import Home from "./Home/Home";
import Commodity from "./Commodity/AllCommodity";

const App = () => {
  return (
    <>
      <AllNav />
      <Home />
      <Commodity />
      <Footer />
    </>
  );
};

export default App;
