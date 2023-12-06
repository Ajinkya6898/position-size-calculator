import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const StockTradingApp = () => {
  const [boughtPrice, setBoughtPrice] = useState("");
  const [atr, setAtr] = useState("");
  const [totalAmount, setTotalAmount] = useState("200000");
  const [riskPercentage, setRiskPercentage] = useState("1");
  const [target, setTarget] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [positionSize, setPositionSize] = useState("");
  const [amountUsed, setAmountUsed] = useState("");
  const [remaningAmt, setRemaningAmt] = useState("");

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
    setTarget(targetLevel);

    const halfOfAtr = +atr * 0.5;
    const stoplossLevel = +boughtPrice - halfOfAtr;
    setStopLoss(stoplossLevel);

    const riskPerTrade = (totalAmount * riskPercentage) / 100;
    const positionSizeValue = Math.floor(
      riskPerTrade / (boughtPrice - stoplossLevel)
    );
    setPositionSize(positionSizeValue);

    const totalTradeAmt = +boughtPrice * positionSizeValue;
    setAmountUsed(totalTradeAmt);

    setRemaningAmt(totalAmount - totalTradeAmt);
  };

  return (
    <>
      <Container>
        <TextField
          size="small"
          placeholder="Stock Entry Price"
          value={boughtPrice}
          onChange={handleBoughtPriceChange}
        />
        <TextField
          size="small"
          placeholder="ATR"
          value={atr}
          onChange={handleAtrChange}
        />
        <TextField
          size="small"
          placeholder="Total Amount"
          value={totalAmount}
          onChange={handleTotalAmountChange}
        />
        <TextField
          size="small"
          placeholder="Risk Percentage"
          value={riskPercentage}
          onChange={handleRiskPercentageChange}
        />
        <Button variant="contained" onClick={calculateValues}>
          Calculate
        </Button>
      </Container>
      <Container>
        <Typography variant="h5">Position Size - {positionSize}</Typography>
        <Typography variant="h5">Stoploss - {stopLoss}</Typography>
        <Typography variant="h5">Target - {target}</Typography>
        <Typography variant="h5">Amount Used - {amountUsed}</Typography>
        <Typography variant="h5">Remaining Amount - {remaningAmt}</Typography>
      </Container>
    </>
  );
};

export default StockTradingApp;
