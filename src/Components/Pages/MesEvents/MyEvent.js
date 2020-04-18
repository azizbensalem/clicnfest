import React from 'react';
import AppBar from '../../Header/Navbar';
import { Typography, Container } from '@material-ui/core';
import Table from './Table';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
padding :{
    paddingTop: '30px',
    paddingBottom: '30px'
}
}));

export default function MyEvent() {
    const classes = useStyles();
    return (
      <div>
        <AppBar />
        <Container className={classes.padding}>
          <Typography variant="h6">Mes événements</Typography>
          <Table />
        </Container>
      </div>
    );
}