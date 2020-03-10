import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EventCreation from "./EventCreation";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
          <EventCreation />
      </CardContent>
    </Card>
  );
}
      
