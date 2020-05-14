import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Grow, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import eyemask from '../../../Icons/eye-mask.png';
import itinerary from '../../../Icons/itinerary.png';
import socks from '../../../Icons/socks.png';
import video from '../../../Icons/video.png';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '50px',
        background: '#f4f6f8',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingBottom: '30px',
    },
    paper: {
        textAlign: 'center',
    },
    padding: {
        paddingTop: '10px',
        paddingBottom: '10px',
    }
}));

export const Theme = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <Container>
                <Typography variant="h4" className={classes.text}>Thème</Typography>
                <br></br>
                <Grid className={classes.paper} container spacing={4} >
                    <Grow in={true}>
                        <Grid item xs lg={3}>
                            <img src={eyemask}/>
                            <Typography variant="h5" className={classes.padding} style={{ fontWeight: 'Bold ' }}>Soirée&nbsp;déguisée</Typography>
                            <Typography className={classes.padding} >Les organisateurs se déguisent en détectives,
                            comédiens, politiciens, chanteurs, vampires, etc..</Typography>
                        </Grid>
                    </Grow>
                    <Grow in={true}>
                        <Grid item xs lg={3}>
                            <img src={itinerary} />
                            <Typography variant="h5" className={classes.padding} style={{ fontWeight: 'Bold ' }}>Voyage dans le temps</Typography>
                            <Typography className={classes.padding}>les organisateurs doivent choisir l’époque dans
                            laquelle leurs soirées devrait être (soit dans le
                            futur ou dans le passé) et se déguiseront de cette
                            époque choisis.</Typography>
                        </Grid>
                    </Grow>
                    <Grow in={true}>
                        <Grid item xs lg={3}>
                            <img src={video} />
                            <Typography variant="h5" className={classes.padding} style={{ fontWeight: 'Bold ' }}>Cinéma</Typography>
                            <Typography className={classes.padding}>Les organisateurs vont choisir un film ou une série
                            comme thème de leur soirée. </Typography>
                        </Grid>
                    </Grow>
                    <Grow in={true}>
                        <Grid item xs lg={3}>
                            <img src={socks} />
                            <Typography variant="h5" className={classes.padding} style={{ fontWeight: 'Bold '}}>Pyjama</Typography>
                            <Typography className={classes.padding}>Tous le monde vient en pyjama: amusant et facile
                            à faire.
                            </Typography>
                        </Grid>
                    </Grow>
                </Grid>
            </Container>
        </div>
    );
}