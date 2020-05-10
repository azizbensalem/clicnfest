import React from 'react';
import AppBar from '../../Header/Navbar';
import { Typography, Container } from '@material-ui/core';
import { Event as Table } from './Table';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
padding :{
    paddingTop: '25px',
    paddingBottom: '25px'
},
  image: {
    height: '50vh',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://www.ucb.ac.uk/content/images/courses/hospitality-tourism-events/events-management-3.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  title: {
    paddingTop: '19vh',
    fontWeight: 'bold',
    color: 'white',
  },
}));

export default function MyEvent() {
    const classes = useStyles();
    return (
      <div>
        <AppBar />
        <div className={classes.image}>
          <Typography variant="h3" className={classes.title}>MES ÉVÉNEMENTS</Typography>
        </div>
        <Container>
          <Typography className={classes.padding} variant="h6">Mes événements</Typography>
          <Table />
        </Container>
      </div>
    );
}