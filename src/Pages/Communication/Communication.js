import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ComCard } from './Comcard';
import { Typography, Container, Grid, Grow} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AppBar from '../../Components/Header/Navbar';
import { Menu } from '../../Components/Tabs';
import { TotalSb } from '../../Components/Footer/TotalSb';
import ScrollTop from '../../Components/Footer/ScrollTop';
import Communications from '../../Images/Communication.png';


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
        backgroundImage: 'url('+Communications+')',
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
    const data = useSelector(state => state.items);
    const com = data.filter(item =>
        item.genre.toString().toLowerCase().includes("communication")
    );
    return(
        <div>
            <AppBar />
            <Menu value={4} />
            <div className={classes.image}>
                <Typography variant="h3" className={classes.title}>COMMUNICATION</Typography>
            </div>
            <Container className={classes.padding}>
                <Grid className={classes.paper} container spacing={4} >
                    {com.map(com => (
                    <Grow in={true}>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <ComCard id={com.id} title={com.title} 
                            description={com.description} img={com.img} />
                        </Grid>
                    </Grow>
                    ))}
                </Grid>
            </Container>
            <TotalSb page="boissons" />
            <ScrollTop />
        </div>
    );
}