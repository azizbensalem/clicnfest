import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from '../../../Components/Header/AppBar';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Boissons from './Boissons';
import SucreeSale from './SucreeSale';
import Extra from './Extra';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BrowserView, MobileView, isBrowser, isMobile, isAndroid, isMobileOnly } from "react-device-detect";
import ButtonBase from '@material-ui/core/ButtonBase';



function getSteps() {
  return ['Organiser mon événement', 'Choisir les invités', 'Commander'];
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "auto",
    color: theme.palette.text.secondary
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  image: {
    width: 128,
    height: 128
  },
  imageMobile: {
    width: 190,
    height: 190,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Index() {
  const classes = useStyles();
  const steps = getSteps();
  const activeStep = 2;
  const [expanded, setExpanded] = React.useState(false);
  const expandChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  const renderContent = () => {
    if (isMobileOnly) {
      return <div>
        <ButtonBase>
          <img
            className={classes.img}
            alt="complex"
            src="https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
          />
        </ButtonBase></div>
    }
    return <div>
      <ButtonBase className={classes.image}>
        <img
          className={classes.img}
          alt="complex"
          src="https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
        />
      </ButtonBase></div>
  };

    return (
      <div className={classes.root}>
        <AppBar />
        <Card className={classes.card}>
          <CardContent>
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
            <div>
              <Link to='/invite' style={{ textDecoration: 'none' }}>
                <Button>
                  Retour
                </Button>
              </Link>
              <Link to='/commande' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" >
                  Suivant
                </Button>
              </Link>
            </div>
            </Container>
        </CardContent>
        </Card>
      </div>
    );
}