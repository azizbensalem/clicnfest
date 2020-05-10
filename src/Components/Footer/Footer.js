import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clicnfest from '../../Images/clicnfest.PNG';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#2e2f33',
        color: 'white',
        display: 'flex',
        padding: '50px',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        backgroundColor: '#2e2f33',
        color: 'white',
        padding: '50px',
    },
    img :{
        width: '50%',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return(
            <div className={classes.sectionDesktop}>
            <Grid container spacing={1}>
                <Grid conatainer item md={2}>
                    <img src={clicnfest} className={classes.img} />
                </Grid>
                <Grid conatainer item md={3}>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>            
                </Grid>
                <Grid conatainer item md={3}>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>              
                </Grid>
                <Grid conatainer item md={4}>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>
                    <Typography>Footer Footer Footer</Typography>              
                </Grid>
            </Grid>
            </div>
    )
}