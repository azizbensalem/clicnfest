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
import { BrowserView, MobileView, isBrowser, isMobile, isAndroid, isMobileOnly } from "react-device-detect";
import clicnfest from '../../clicnfest.PNG';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            minWidth: 250,
        },
        borderRadius: '50px'
    },
    rootMobile: {
        '& > *': {
            margin: theme.spacing(1),
            minWidth: 250,
            textAlign: 'center',
        },
        borderRadius: '50px',
    },
    img: {
        width: '25%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: theme.spacing(1),
        color: '#3f51b5',
        textAlign: 'center',
    },
    Background: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BackgroundBrowser: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
}));

export default function Inscription() {
    const classes = useStyles();
    return (
        <div className={isMobileOnly ? classes.Background : classes.BackgroundBrowser}>
            <Grid style={{margin: 'auto', padding: '10px' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <img src={clicnfest} className={classes.img} />
                </Grid>
                <Grid item xs={12}>
                    <Card className={isMobileOnly ? classes.rootMobile : classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Inscrivez-vous à votre compte
                    </Typography><br></br>
                            <form className={isMobile ? classes.rootMobile : classes.root} noValidate autoComplete="off">
                                <TextField id="nom" label="Nom" variant="outlined" />
                                <TextField id="prenom" label="Prénom" variant="outlined" /><br></br>
                                <TextField id="username" label="Nom d'utilisateur" variant="outlined" />
                                <TextField id="email" label="Email" variant="outlined" /><br></br>
                                <TextField id="tel" label="Téléphone" variant="outlined" />
                                <TextField id="pwd" type="Password" label="Mot de passe" variant="outlined" /><br></br>
                                <TextField id="confirmpwd" type="Password" label="Confirmer mot de passe" variant="outlined" />
                                <div style={{ textAlign: 'center' }}>
                                    <Link to='/create_event' style={{ textDecoration: 'none' }}>
                                    <Button style={{ width: '200px' }} color="primary" variant="contained">S'inscrire</Button>
                                    </Link>                                
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}