// StockTradingApp.jsx
import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import StockForm from "./StockForm";
import BasicTable from "./BasicTabel";

const StockTradingApp = () => {
  const [stocks, setStocks] = useState([]);

  const addStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  return (
    <Container sx={{ backgroundColor: "white", mt: "50px" }}>
      <Box py="20px">
        <Typography variant="h5" textAlign="center">
          Position Size Calculator
        </Typography>
      </Box>
      <Box py="20px" textAlign="center">
        <StockForm addStock={addStock} />
      </Box>
      <Box margin="auto" py="20px">
        <BasicTable stocks={stocks} />
      </Box>
    </Container>
  );
};

export default StockTradingApp;
