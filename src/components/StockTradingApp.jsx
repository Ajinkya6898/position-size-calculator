// StockTradingApp.jsx
import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import StockForm from "./StockForm";
import BasicTable from "./BasicTabel";
import toast from "react-hot-toast";

const containerStyle = {
  backgroundColor: "white",
  mt: "50px",
  width: "1400px",
  margin: "auto",
  padding: "0 20px",
};

const StockTradingApp = () => {
  const [stocks, setStocks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const clearAllEntries = () => {
    setStocks([]);
    localStorage.removeItem("stocks");
  };

  const addStock = (stock) => {
    toast.success("Added Stock Successfully");
    if (editIndex !== null) {
      const updatedStocks = [...stocks];
      updatedStocks[editIndex] = stock;
      setStocks(updatedStocks);
      setEditIndex(null);
    } else {
      setStocks([...stocks, stock]);
    }

    localStorage.setItem("stocks", JSON.stringify([...stocks, stock]));
  };

  const deleteStock = (index) => {
    toast.success("Removed Stock Successfully");
    const updatedStocks = [...stocks];
    updatedStocks.splice(index, 1);
    setStocks(updatedStocks);

    localStorage.setItem("stocks", JSON.stringify(updatedStocks));
  };

  const editStock = (index) => {
    setEditIndex(index);
  };

  useEffect(() => {
    const savedStocks = JSON.parse(localStorage.getItem("stocks")) || [];
    setStocks(savedStocks);
  }, []);

  return (
    <Box sx={containerStyle}>
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
        <BasicTable
          stocks={stocks}
          deleteStock={deleteStock}
          editStock={editStock}
        />
      </Box>
    </Box>
  );
};

export default StockTradingApp;
