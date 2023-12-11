// BasicTable.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1e293b",
    color: theme.palette.common.white,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const alignMiddle = {
  textAlign: "center",
};

const BasicTable = ({ stocks }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Stoploss</StyledTableCell>
              <StyledTableCell>Target</StyledTableCell>
              <StyledTableCell>Position Size</StyledTableCell>

              <StyledTableCell>Stoploss %</StyledTableCell>
              <StyledTableCell>Target %</StyledTableCell>
              <StyledTableCell>R Multiple</StyledTableCell>
              <StyledTableCell>Amount Used</StyledTableCell>
              <StyledTableCell>Remaining Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock, index) => (
              <TableRow key={index}>
                <TableCell sx={alignMiddle}>{index + 1}</TableCell>
                <TableCell sx={alignMiddle}>{stock.stopLoss}</TableCell>
                <TableCell sx={alignMiddle}>{stock.target}</TableCell>
                <TableCell sx={alignMiddle}>{stock.positionSize}</TableCell>

                <TableCell sx={alignMiddle}>
                  {(
                    ((stock.stopLoss - stock.boughtPrice) / stock.boughtPrice) *
                    100
                  ).toFixed(2)}
                  %
                </TableCell>
                <TableCell sx={alignMiddle}>
                  {(
                    ((stock.target - stock.boughtPrice) / stock.boughtPrice) *
                    100
                  ).toFixed(2)}
                  %
                </TableCell>
                <TableCell sx={alignMiddle}>
                  {(
                    (stock.target - stock.boughtPrice) /
                    (stock.boughtPrice - stock.stopLoss)
                  ).toFixed(2)}
                </TableCell>
                <TableCell sx={alignMiddle}>{stock.amountUsed}</TableCell>
                <TableCell sx={alignMiddle}>{stock.remainingAmt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasicTable;
