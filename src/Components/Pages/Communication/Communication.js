import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ComCard } from './Comcard';
import { Typography, Container, Grid, Grow} from "@material-ui/core";
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
        backgroundImage: 'url("https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg")',
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
                    <Grow in={true}>
                        <Grid item xs lg={6}>
                            <ComCard />
                        </Grid>
                    </Grow>
                    <Grow in={true}>
                        <Grid item xs lg={6}>
                            <ComCard />
                        </Grid>
                    </Grow>
                    <Grow in={true}>
                        <Grid item xs lg={6}>
                            <ComCard />
                        </Grid>
                    </Grow>
                    <Grow in={true}>
                        <Grid item xs lg={6}>
                            <ComCard />
                        </Grid>
                    </Grow>
                </Grid>
            </Container>
            <TotalSb page="boissons" />
            <ScrollTop />
        </div>
    );
}