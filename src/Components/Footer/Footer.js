import React from 'react';
import { Typography, Link, InputBase, Paper, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clicnfest from '../../Images/clicnfest.PNG';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
        backgroundColor: '#252525',
        color: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    img :{
        width: '60%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    paper: {
        padding: '2px 4px',
        display: 'flex',
    },
}));

export default function Footer() {
    const classes = useStyles();

    return(
            <div className={classes.sectionDesktop}>
            <Grid container spacing={1}>
                <Grid item md={2}>
                    <img src={clicnfest} className={classes.img} />
                </Grid>
                <Grid item md={3}>
                    <Typography variant="h6" style={{ paddingBottom: '20px' , color: '#DDDDDD' , fontWeight: 'bold'}}>À PROPOS DE CLIC' N FEST</Typography>
                    <Link underline="none" color="inherit" href="/">Qui sommes-nous ?</Link><br></br>
                    <Link underline="none" color="inherit" href="/">Contactez nous</Link><br></br>
                    <Typography></Typography>            
                </Grid>
                <Grid item md={3}>
                    <Typography variant="h6" style={{ paddingBottom: '20px', color: '#DDDDDD', fontWeight: 'bold'}}>AUTRES SITES</Typography>
                    <Link underline="none" color="inherit" href="https://tunivisions.net">Tunivisions</Link><br></br>
                    <Link underline="none" color="inherit" href="/">Tunivisions Ticket</Link><br></br>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="h6" style={{ paddingBottom: '20px', color: '#DDDDDD', fontWeight: 'bold'}}>NEWSLETTER</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <InputBase className={classes.input} />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Button style={{ background: 'rgb(210, 23, 64)' , color: 'white' }} 
                            variant="contained">Envoyer</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>
                            <IconButton style={{ color: 'white' }}><FacebookIcon /></IconButton>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton style={{ color: 'white' }}><TwitterIcon /></IconButton>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton style={{ color: 'white' }}><InstagramIcon /></IconButton>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton style={{ color: 'white' }}><YouTubeIcon /></IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}