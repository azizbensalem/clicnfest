import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from '../Header/AppBar';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function getSteps() {
  return ['Créer un événement', 'Choisir les invités', 'Commander'];
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  WidthInput: {
    "& > *": {
      margin: theme.spacing(1),
      minWidth: 300
    }
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
    width: 280,
    height: 280
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Commande() {
    const classes = useStyles();
    const [type, setType] = React.useState("");
    const [partner, setPartner] = React.useState("");
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
      setType(event.target.value);
    };

    const partnerChange = event => {
        setPartner(event.target.value);
    };

  const steps = getSteps();
  const activeStep = 2;
  const renderContent = () => {
    if (isMobile) {
      return <div>              
        <ButtonBase className={classes.imageMobile}>
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
    const [expanded, setExpanded] = React.useState(false);

    const expandChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    }
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
                <Typography className={classes.heading}>Choisir les produits</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ display: 'block' }}>
                <form className={classes.WidthInput} noValidate autoComplete="off">
                          <TextField
                            id="outlined-basic"
                            label="Nom du produit"
                            variant="outlined"
                          />
                          <FormControl variant="outlined" className={classes.formControl}>
                                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                    Type du produit
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={type}
                                    onChange={handleChange}
                                    labelWidth={labelWidth}
                                  >
                                          <MenuItem value={10}>Boisson Gazeuse</MenuItem>
                                          <MenuItem value={20}>Biscuit</MenuItem>
                                  </Select>
                          </FormControl>
                          <FormControl variant="outlined" className={classes.formControl}>
                                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                    Partenaire
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={partner}
                                    onChange={partnerChange}
                                    labelWidth={labelWidth}
                                  >
                                      <MenuItem value={10}>Tunivisions</MenuItem>
                                  </Select>
                          </FormControl>
                </form>
                <br></br>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      {renderContent()}
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                  </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                  </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                  </Typography>
                        </Grid>
                        <Grid item>
                          <Button>Voir les détails</Button>
                          <Button>Ajouter au panier</Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">19.000 DT</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper> 
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={expandChange('panel2')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Extra</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
          </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        <br></br>
            <div>
              <Link to='/clicnfest/invite' style={{ textDecoration: 'none' }}>
                <Button>
                  Retour
                </Button>
              </Link>
              <Link to='/clicnfest/commande' style={{ textDecoration: 'none' }}>
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