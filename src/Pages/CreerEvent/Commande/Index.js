import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AppBar from '../../../Components/Header/Navbar';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Boisson as Boissons } from './Boissons';
import SucreeSale from './SucreeSale';
import Extra from './Extra';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScrollTop from '../../../Components/Footer/ScrollTop';
import Snackbar from '@material-ui/core/Snackbar';
import { Somme } from '../../Total';


function getSteps() {
  return ['Organiser mon événement', 'Choisir les participants', 'Commander'];
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  padding: {
    padding: '20px'
  },
  button: {
    paddingTop: '15px',
  },
}));

export default function Index(props) {
  const classes = useStyles();
  const steps = getSteps();
  const activeStep = 2;
  const [expanded, setExpanded] = React.useState(false);
  const expandChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
    return (
      <div className={classes.root}>
        <AppBar />
        <div className={classes.padding}>
                <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Container>
            <Typography variant="h6">Commander</Typography><br></br>
              <ExpansionPanel expanded={expanded === 'panel1'} onChange={expandChange('panel1')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Boissons</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'block' }}>
                <Boissons />
                </ExpansionPanelDetails>
                </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel2'} onChange={expandChange('panel2')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Sucrée Salé</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'block' }}>
                <SucreeSale />
                </ExpansionPanelDetails>
                </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel3'} onChange={expandChange('panel3')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Extra</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'block' }}>
                <Extra />
                </ExpansionPanelDetails>
                </ExpansionPanel>
        <br></br>
            <div className={classes.button}>
              <Link to='/invite' style={{ textDecoration: 'none' }}>
                <Button>
                  Retour
                </Button>
              </Link>
              <Link to='/cart' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" >
                  Suivant
                </Button>
              </Link>
            </div>
            </Container>
        </div>
        <Snackbar
          open
          autoHideDuration={6000}
          message={<Somme />}
          action={
            <Button color="inherit" size="small">
              Voir les détails
            </Button>
          }
          className={classes.snackbar}
        />
        <ScrollTop />
      </div>
    );
}