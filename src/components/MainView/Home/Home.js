import React from "react";
import {Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import "./home.css";

const useStyles = makeStyles((theme) => ({
  typographyStyle: {
    flex: 1
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="head">
      <h1>Businessopedia</h1>
      <Typography className={classes.typographyStyle}>
        about us
      </Typography>
    </div>
  );
}
