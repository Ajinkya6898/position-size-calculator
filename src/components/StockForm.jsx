// StockForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const textFieldMargin = {
  mr: "20px",
  width: "100px",
};

const StockForm = ({ addStock }) => {
  const [boughtPrice, setBoughtPrice] = useState("");
  const [atr, setAtr] = useState("");
  const [totalAmount, setTotalAmount] = useState("200000");
  const [riskPercentage, setRiskPercentage] = useState("1");

  const handleBoughtPriceChange = (e) => {
    setBoughtPrice(e.target.value);
  };

  const handleAtrChange = (e) => {
    setAtr(e.target.value);
  };

  const handleTotalAmountChange = (e) => {
    setTotalAmount(e.target.value);
  };

  const handleRiskPercentageChange = (e) => {
    setRiskPercentage(e.target.value);
  };

  const calculateValues = () => {
    const targetLevel = +boughtPrice + +atr;
    const halfOfAtr = +atr * 0.5;
    const stoplossLevel = +boughtPrice - halfOfAtr;
    const riskPerTrade = (totalAmount * riskPercentage) / 100;
    const positionSizeValue = Math.floor(
      riskPerTrade / (boughtPrice - stoplossLevel)
    );
    const totalTradeAmt = +boughtPrice * positionSizeValue;

    addStock({
      boughtPrice,
      atr,
      totalAmount,
      riskPercentage,
      target: targetLevel,
      stopLoss: stoplossLevel,
      positionSize: positionSizeValue,
      amountUsed: totalTradeAmt,
      remainingAmt: totalAmount - totalTradeAmt,
    });

    // Update total amount for the next stock
    setTotalAmount(totalAmount - totalTradeAmt);
  };

  return (
    <Box py="20px">
      <TextField
        size="small"
        sx={textFieldMargin}
        placeholder="Stock Entry Price"
        value={boughtPrice}
        autoComplete="off"
        onChange={handleBoughtPriceChange}
      />
      <TextField
        size="small"
        sx={textFieldMargin}
        placeholder="ATR"
        value={atr}
        autoComplete="off"
        onChange={handleAtrChange}
      />
      <TextField
        size="small"
        sx={textFieldMargin}
        placeholder="Total Amount"
        value={totalAmount}
        autoComplete="off"
        onChange={handleTotalAmountChange}
      />
      <TextField
        size="small"
        sx={textFieldMargin}
        placeholder="Risk Percentage"
        value={riskPercentage}
        autoComplete="off"
        onChange={handleRiskPercentageChange}
      />
      <Button variant="contained" onClick={calculateValues}>
        Calculate
      </Button>
    </Box>
  );
};

export default StockForm;
