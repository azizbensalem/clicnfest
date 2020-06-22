import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../../Components/Header/Navbar';
import Container from '@material-ui/core/Container';
import { CreerEvent } from './CreateEvent';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Paper, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  padding: {
      justifyContent: 'center',
      padding: '20px',
  },
title: {
    paddingTop: '21vh',
    fontWeight: 'bold',
},
  height: {
    minHeight: '100vh',
  },
    image: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        marginTop: '30px',
        marginBottom: '20px',
        textAlign: "auto",
        color: theme.palette.text.secondary,
    },
}));

function getSteps() {
    return ['Créer un événement', 'Créer des tickets', 'Ajouter des participants'];
}

export const Organisation = () => {
    const classes = useStyles();
    const steps = getSteps();
    return (
        <div>
          <AppBar />
            <div className={classes.image}>
                <Typography variant="h3" className={classes.title}>CRÉER UN ÉVÉNEMENT</Typography>
            </div>
            <div className={classes.padding}>
                <CreerEvent />
            </div>
        </div>
    );
}
