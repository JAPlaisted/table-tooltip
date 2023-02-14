import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ProbabilityHistoryChart from "./ProbabilityHistoryChart";
import PilytixFactorsIncreasingWinChart from "./PilytixFactorsIncreasingWinChart";
import PilytixFactorsDecreasingWinChart from "./PilytixFactorsDecreasingWinChart";

const useStyles = makeStyles({
  root: {
    minWidth: "100vw",
    backgroundColor: "#fffaf4"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ToolTip = ({ data, onClose }) => {
  const classes = useStyles();
  const {
    oppId,
    oppName,
    salesRepName,
    amount,
    product,
    stage,
    repProbability,
    pilytixTier,
    pilytixProbability,
    probabilityHistory,
    pilytixFactorsIncreasingWin,
    pilytixFactorsDecreasingWin
  } = data;

  return (
    <Card className={classes.root}>
      <CloseIcon onClick={(e) => onClose()} />
      <CardContent>
        <Typography variant="h5" component="h2">
          Opportunity ID: {oppId}
        </Typography>
        <Typography variant="h5" component="h2">
          Opportunity Name: {oppName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Sales Rep Name: {salesRepName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Amount: {amount}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Product: {product}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Stage: {stage}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Sales Rep Probability: {repProbability}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Pilytix Tier: {pilytixTier}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Pilytix Probability: {pilytixProbability}
        </Typography>
        <Typography variant="h6" component="h3">
          Probability History:
        </Typography>
        {Array.isArray(probabilityHistory) && probabilityHistory.length > 0 ? (
          <ProbabilityHistoryChart probabilityHistory={probabilityHistory} />
        ) : (
          <Typography variant="h6" component="h3">
            No Probability History Data Available
          </Typography>
        )}
        <Typography variant="h6" component="h3">
          Pilytix Factors Increasing/Decreasing Win:
        </Typography>
        <div className="mobileColumn">
          {Array.isArray(pilytixFactorsIncreasingWin) &&
          pilytixFactorsIncreasingWin.length > 0 ? (
            <PilytixFactorsIncreasingWinChart
              pilytixFactorsIncreasingWin={pilytixFactorsIncreasingWin}
            />
          ) : (
            <Typography className={classes.pos} color="textSecondary">
              No Factors Increasing Win Found
            </Typography>
          )}
          {Array.isArray(pilytixFactorsDecreasingWin) &&
          pilytixFactorsDecreasingWin.length > 0 ? (
            <PilytixFactorsDecreasingWinChart
              pilytixFactorsDecreasingWin={pilytixFactorsDecreasingWin}
            />
          ) : (
            <Typography className={classes.pos} color="textSecondary">
              No Factors Decreasing Win Found
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolTip;
