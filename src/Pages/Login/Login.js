import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from '../../Components/Header/AppBar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile, isAndroid, isMobileOnly } from "react-device-detect";
import clicnfest from '../../clicnfest.PNG';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({ 
  root: {
    borderRadius: '25px',
    textAlign: 'center',
    width: '300px',
    margin: 'auto',
  },
  rootForm: {
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: 500,
      minWidth: 250,
  },

  },
  img: {
    width: '30%',
  },
  link: {
    margin: theme.spacing(1),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: theme.spacing(1),
    color: '#3f51b5'
  },
  pos: {
    marginBottom: 12
  },
  Background: {
    background: 'linear-gradient(to right, #ff0099, #493240)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default function Login() {
    const classes = useStyles();
    return (
      <div className={classes.Background}>
        <Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <img src={clicnfest} className={classes.img} />
          </Grid><br></br>
        <Grid item xs={12}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
              Se connecter à Clic'n Fest
        </Typography><br></br>
            <form className={classes.rootForm} noValidate autoComplete="off">
              <TextField id="username" label="Nom d'utilisateur" variant="outlined" /><br></br>
              <TextField id="password" type="Password" label="Mot de passe" variant="outlined" /><br></br>
              <div style={{ textAlign: 'center' }}>
              <Link to='/create_event' style={{ textDecoration: 'none' }}>
                   <Button color="primary" variant="contained">Se connecter</Button>
              </Link>
              </div>
            </form>
            <div className={classes.link}>
              <Typography className={classes.link}>
              <Link to="" style={{ textDecoration: 'none' }}>
                  Mot de passe oublié
                </Link>
              </Typography>
              <Typography className={classes.link}>
              <Link to="/inscription" style={{ textDecoration: 'none' }}>
                  Inscrivez-vous à un compte
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
        </Grid>
        </Grid>
      </div>
    );
}




