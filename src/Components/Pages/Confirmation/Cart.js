import React from 'react';
import { Total } from './Total'
import AppBar from '../../Header/Navbar';
import ProdCom from '../../ProdCom';
import { Button, Container, Typography } from '@material-ui/core';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    padding: {
        padding: '20px',
    },
    button: {
        paddingTop: '15px',
    },
    paddingTop: {
        paddingTop: '40px',
    }
}));

export const ContentCom = ({ page }) => {
    const items = useSelector(state => state.addedItems);
    const classes = useStyles();
        let addedItems = items.length ?
            (
                items.map(item => {
                    return (
                        <div className={classes.button}>
                            <ProdCom image={item.img} titre={item.title} volume={item.volume}
                                type={item.type} prix={item.prix} description={item.desc} quantity={item.quantity}
                                id={item.id} page={page}/>
                        </div>
                    )
                })
            ) :
            (
                <p>Aucun produit</p>
            )
        return (
            <div>
                    {addedItems}
                    <Total />
            </div>
        );
    };


    export const Cart = ({ page }) => {
        const history = useHistory();
        const items = useSelector(state => state.addedItems);
        const classes = useStyles();
        return (
            <div>
            <AppBar />
            <Container className={classes.paddingTop}>
                <Typography variant="h6">Confirmer la commande</Typography>
                <ContentCom page={page}/>
                <Button onClick={() => history.push('/lieux')}>Retour</Button>
                <Button onClick={() => history.push('/evenements/organisation')} variant="contained" color="primary" disabled={items.length > 0 ? false : true}>Créer l'événement</Button>
                <br></br><br></br>
            </Container>
            </div>
        )
    }