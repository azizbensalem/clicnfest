import React from 'react';
import AppBar from '../../Header/Navbar';
import { makeStyles } from "@material-ui/core/styles";
import Show from './Show';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    image: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://www.ucb.ac.uk/content/images/courses/hospitality-tourism-events/events-management-3.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    title: {
        paddingTop: '19vh',
        fontWeight: 'bold',
        color: 'white',
    },
}));
export default function Profil() {
    const classes = useStyles();
    return(
    <div>
        <AppBar />
            <div className={classes.image}>
                <Typography variant="h3" className={classes.title}>MON PROFIL</Typography>
            </div>
            <Show />
    </div>
    );
}