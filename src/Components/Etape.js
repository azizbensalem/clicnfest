import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function getSteps() {
    return ['Organiser mon événement', 'Choisir les participants', 'Commander', 'Confirmer la commande'];
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 20,
        justifyContent: 'center',
    },
    padding: {
        padding: '20px'
    },
    button: {
        paddingTop: '15px',
    },
}));

const Etape = ({ activeStep }) => {
    const classes = useStyles();
    const steps = getSteps();
    return (
        <div className={classes.root}>
                <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
        </div>
    );
}

export default Etape;