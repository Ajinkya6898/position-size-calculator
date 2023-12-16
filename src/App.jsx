import React from "react";
import { Toaster } from "react-hot-toast";
import StockTradingApp from "./components/StockTradingApp";

const App = () => {
  return (
    <>
      <StockTradingApp />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        duration={3000}
        toastOptions={{
          success: {
            style: {
              background: "#b9f6ca",
            },
          },
          error: {
            style: {
              background: "#ffebee",
            },
          },
        }}
      />
    </>
  );
};

export default App;
