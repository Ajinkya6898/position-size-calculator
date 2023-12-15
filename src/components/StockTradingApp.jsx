// StockTradingApp.jsx
import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import StockForm from "./StockForm";
import BasicTable from "./BasicTabel";

const StockTradingApp = () => {
  const [stocks, setStocks] = useState([]);

  const clearAllEntries = () => {
    setStocks([]);
    localStorage.removeItem("stocks");
  };

  const addStock = (stock) => {
    localStorage.setItem("stocks", JSON.stringify([...stocks, stock]));
    setStocks([...stocks, stock]);
  };

  useEffect(() => {
    const savedStocks = JSON.parse(localStorage.getItem("stocks")) || [];
    setStocks(savedStocks);
  }, []);

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
      <Box textAlign="center" py="20px">
        <Button variant="outlined" color="error" onClick={clearAllEntries}>
          Clear All Entries
        </Button>
      </Box>
      <Box margin="auto" py="20px">
        <BasicTable stocks={stocks} />
      </Box>
    </Container>
  );
};

export default StockTradingApp;
