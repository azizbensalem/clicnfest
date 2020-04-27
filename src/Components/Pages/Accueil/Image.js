import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import eventu from '../../../eventu.png';

const useStyles = makeStyles(theme => ({
    root: {
        height: 180,
        display: 'initial'
    },
    paper: {
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    img: {
      maxHeight: '593px',
      width: '2000px',
    },
    Background: {
        // background: 'linear-gradient(to right, #ff0099, #493240)',
        backgroundImage: `url(${eventu})`,
        height: '100vh',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    section :{
        margin: 'auto',
        justifyContent: 'center',
        padding: '20px',
        color: 'white'
    }
}));

export default function SimpleFade() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(prev => !prev);
    };
    const history = useHistory();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Fade in={setChecked} timeout={3000}>
                    <div className={classes.Background}>
                        <Fade in={setChecked} timeout={3000}>
                        <div style={{ paddingTop: '150px'}}>
                        <Typography className={classes.section} variant="h3" >Bienvenue dans Clic'&nbsp;Fest</Typography>
                        <Typography className={classes.section} variant="h5" >Créer&nbsp;votre&nbsp;événement maintenant</Typography>
                        <Button onClick={() => history.push('/create_event')} variant="contained" color="primary">Nouveau événement</Button>
                        </div>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
