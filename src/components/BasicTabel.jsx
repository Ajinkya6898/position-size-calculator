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

const BasicTabel = ({
  target,
  stopLoss,
  positionSize,
  amountUsed,
  remaningAmt,
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Stoploss</StyledTableCell>
              <StyledTableCell>Target</StyledTableCell>
              <StyledTableCell>Position Size</StyledTableCell>
              <StyledTableCell>Amount Used</StyledTableCell>
              <StyledTableCell>Remaining Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell sx={alignMiddle} component="th" scope="row">
                {stopLoss}
              </TableCell>
              <TableCell sx={alignMiddle}>{target}</TableCell>
              <TableCell sx={alignMiddle}>{positionSize}</TableCell>
              <TableCell sx={alignMiddle}>{amountUsed}</TableCell>
              <TableCell sx={alignMiddle}>{remaningAmt}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasicTabel;
