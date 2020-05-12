import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ComCard } from './Comcard';
import { Typography, Container, Grid } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
import AppBar from '../../Header/Navbar';
import { Menu } from '../../Tabs';
import { TotalSb } from '../../Footer/TotalSb';
import ScrollTop from '../../Footer/ScrollTop';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(7),
    },
    padding: {
        paddingBottom: '80px',
    },
    image: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    title: {
        paddingTop: '21vh',
        fontWeight: 'bold',
        fontSize: '4vh',
    },
}));

export const Communication = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar />
            <Menu value={4} />
            <div className={classes.image}>
                <Typography variant="h3" className={classes.title}>COMMUNICATION</Typography>
            </div>
            <Container className={classes.padding}>
                <Grid className={classes.paper} container spacing={4} >
                    <Grid item xs lg={6}>
                        <ComCard />
                    </Grid>
                    <Grid item xs lg={6}>
                        <ComCard />
                    </Grid>
                    <Grid item xs lg={6}>
                        <ComCard />
                    </Grid>
                    <Grid item xs lg={6}>
                        <ComCard />
                    </Grid>
                </Grid>
            </Container>
            <TotalSb page="boissons" />
            <ScrollTop />
        </div>
    );
}