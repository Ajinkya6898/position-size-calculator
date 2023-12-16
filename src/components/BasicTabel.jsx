// BasicTable.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

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

const BasicTable = ({ stocks, deleteStock, editStock }) => {
    return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell>Entry</StyledTableCell>
              <StyledTableCell>Stoploss</StyledTableCell>
              <StyledTableCell>Modifty SL</StyledTableCell>
              <StyledTableCell>Target</StyledTableCell>
              <StyledTableCell>PS</StyledTableCell>
              <StyledTableCell>SL</StyledTableCell>
              <StyledTableCell>Target</StyledTableCell>
              <StyledTableCell>R Multiple</StyledTableCell>
              <StyledTableCell>Amount Used</StyledTableCell>
              <StyledTableCell>Rem Amount</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock, index) => (
              <TableRow key={index}>
                <TableCell sx={alignMiddle}>{index + 1}</TableCell>
                <TableCell sx={alignMiddle}>{stock.stockName}</TableCell>
                <TableCell sx={alignMiddle}>{stock.entry}</TableCell>
                <TableCell sx={alignMiddle}>{stock.stopLoss}</TableCell>
                <TableCell sx={alignMiddle}>{stock.modifySl}</TableCell>
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
                <TableCell sx={alignMiddle}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteStock(index)}
                  >
                    <DeleteRoundedIcon />
                  </Button>
                </TableCell>
                <TableCell sx={alignMiddle}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => editStock(index)}
                  >
                    <EditNoteRoundedIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasicTable;
