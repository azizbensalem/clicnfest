import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../../Components/Header/Navbar';
import Container from '@material-ui/core/Container';
import { Invite } from './Participants';
import { Paper, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    padding: {
        justifyContent: 'center',
        padding: '20px',
    },
    image: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    title: {
        paddingTop: '21vh',
        fontWeight: 'bold',
    },
    height: {
        minHeight: '100vh',
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
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        marginTop: "12px",
        textAlign: "auto",
        color: theme.palette.text.secondary,
    },
}));

export const Participants = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar />
            <div className={classes.image}>
                <Typography variant="h3" className={classes.title}>CHOISIR LES PARTICIPANTS</Typography>
            </div>
            <div className={classes.padding}>
                <Paper className={classes.paper} variant="outlined">
                        <Invite />
                </Paper>
            </div>
        </div>
    );
}
