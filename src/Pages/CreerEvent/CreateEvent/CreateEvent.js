import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from '../../../Components/Header/AppBar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 280,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function getSteps() {
  return ['Organiser mon événement', 'Choisir les invités', 'Commander'];
}

export default function CreerEvent() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        type: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

  const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
  const activeStep = 0;
  const steps = getSteps();

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
        <Typography variant="h6">Organiser mon événement</Typography>
        <br></br>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-type-native-simple">
            Type d'événement
          </InputLabel>
          <Select
            native
            value={state.type}
            onChange={handleChange("type")}
            labelWidth={labelWidth}
            inputProps={{
              name: "type",
              id: "outlined-type-native-simple"
            }}
          >
            <option value="After Work">After Work</option>
            <option value="Conventum">Conventum</option>
            <option value="Team building">Team building</option>
            <option value="Pyjama">Pyjama</option>
            <option value="Demande de mariage">Demande de mariage</option>
          </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-basic"
                  label="Oú"
                  variant="outlined"
                  placeholder="Oú"
                />
         </FormControl>
        <div>
        <Button
          className={classes.backButton}
          disabled
        >
          Retour
              </Button>

        <Link to='/invite' style={{ textDecoration: 'none' }}>
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
