import React from "react";
import { Toaster } from "react-hot-toast";
import StockTradingApp from "./components/StockTradingApp";

const App = () => {
  return (
    <>
      <StockTradingApp />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        duration={3000}
      />
    </>
  );
};

export default App;
