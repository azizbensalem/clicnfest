import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { Fragment, useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Link } from 'react-router-dom';
import Commande from './Commande';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from '../../Header/AppBar';

function getSteps() {
  return ['Créer un événement', 'Choisir les invités', 'Commander'];
}

function Invite() {
    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: 300,
            },
        },
    }));
    const classes = useStyles();
    const [inputFields, setInputFields] = useState([
        { nom: '', prenom: '' , email: ''}
    ]);
    
    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ nom: '', prenom: '', email: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };
   
    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "nom") {
            values[index].nom = event.target.value;
        } else if (event.target.name === "prenom"){
            values[index].prenom = event.target.value;
        } else {
            values[index].email = event.target.value;
        }

        setInputFields(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields", inputFields);
    };
  const activeStep = 1;
  const steps = getSteps();


    return (
        <div>
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
        <Typography variant="h6">Choisir les invités</Typography>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            {inputFields.map((inputField, index) => (
              <Fragment key={`${inputField}~${index}`}>
                <TextField
                  className={classes.root}
                  id="nom"
                  name="nom"
                  label="Nom"
                  variant="outlined"
                  value={inputField.nom}
                  onChange={event => handleInputChange(index, event)}
                />
                <TextField
                  className={classes.root}
                  id="prenom"
                  name="prenom"
                  label="Prénom"
                  variant="outlined"
                  value={inputField.prenom}
                  onChange={event => handleInputChange(index, event)}
                />
                <TextField
                  className={classes.root}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={inputField.email}
                  onChange={event => handleInputChange(index, event)}
                />
                <Fragment>
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={() => handleRemoveFields(index)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                  <IconButton color="primary" onClick={() => handleAddFields()}>
                    <AddCircleIcon fontSize="large" />
                  </IconButton>
                </Fragment>
                <br></br>

              </Fragment>
            ))}
            <div>
              <Link to='/clicnfest/create_event' style={{ textDecoration: 'none' }}>
                <Button>
                    Retour
                </Button>
              </Link>
              
              <Link to='/clicnfest/commande' style={{ textDecoration: 'none'}}>
              <Button variant="contained" color="primary" >
                  Suivant
                </Button>
              </Link>
                
             
            </div>
          </div>
          {/* <button
                    className="btn btn-primary mr-2"
                    type="submit"
                    onSubmit={handleSubmit}
                >
                    Save
                </button> 
                {JSON.stringify(inputFields, null, 2)}*/}
        </form>
        </CardContent>
        </Card>
      </div>
    );
}
export default Invite;