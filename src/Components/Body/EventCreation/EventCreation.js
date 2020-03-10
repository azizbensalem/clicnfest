import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreerEvent from './EventStep1';
import Invite from './Invite';
import Commande from './Commande';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  margin: {
    alignContent: 'center'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Créer un événement', 'Choisir les invités', 'Commander','Payer'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <CreerEvent/>;
    case 1:
      return <Invite />;
    case 2:
      return <Commande />;
    case 3:
      return "aziz";
    default:
      return "Unknown stepIndex";
  }
}



export default function EventCreation() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container fixed>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Retour
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}