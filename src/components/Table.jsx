import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useRef, useEffect } from "react";
import Tooltip from "./Tooltip.jsx";

import * as opportunities from "../opportunities.json";

export default function BasicTable() {
  /**
   * Name: Jonathan Plaisted
   * Email: jonathan.plaisted@outlook.com
   * Time Spent: ~7 Hours
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;

  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // toggle Tooltip state
  function handleRowClick(event, row) {
    setShowTooltip((current) => true);
    setSelectedRow(row);
  }

  function handleClose(event) {
    setShowTooltip((current) => false);
  }

  // navigate to next card
  const indexRef = useRef(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
          indexRef.current = Math.max(0, indexRef.current - 1);
          setSelectedRow(data[indexRef.current]);
          break;
        case "ArrowLeft":
          indexRef.current = Math.min(data.length - 1, indexRef.current + 1);
          setSelectedRow(data[indexRef.current]);
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="custom-table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Opp Name</TableCell>
              <TableCell align="left">Opp Stage</TableCell>
              <TableCell align="right">Rep Probability</TableCell>
              <TableCell align="right">PX Probability</TableCell>
              <TableCell align="left">PX Tier</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Sales Rep</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.oppName}
                </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">{row.repProbability}</TableCell>
                <TableCell align="right">{row.pilytixProbability}</TableCell>
                <TableCell align="left">{row.pilytixTier}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showTooltip && (
        <Tooltip
          data={selectedRow}
          selectedRow={selectedRow}
          show={showTooltip}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
