import React from 'react';
import { Total } from './Total'
import AppBar from '../Header/Navbar';
import ProdCom from '../ProdCom';
import { Button, Container, Typography } from '@material-ui/core';
import { useSelector } from "react-redux";
import Etape from '../Etape';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    padding: {
        padding: '20px',
    },
    button: {
        paddingTop: '15px',
    },
}));

export const ContentCom = () => {
    const items = useSelector(state => state.addedItems);
    const classes = useStyles();
        let addedItems = items.length ?
            (
                items.map(item => {
                    return (
                        <div className={classes.button}>
                            <ProdCom image={item.img} titre={item.title} volume={item.volume}
                                type={item.type} prix={item.prix} description={item.desc} quantity={item.quantity}
                                id={item.id} />
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


    export const Cart = () => {
        const history = useHistory();
        const items = useSelector(state => state.addedItems);
        return (
            <div>
            <AppBar />
            <Container>
            <Etape activeStep={3} />
                <Typography variant="h6">Confirmer la commande</Typography>
                <ContentCom />
                <Button onClick={() => history.push('/commande')}>Retour</Button>
                <Button variant="contained" color="primary" disabled={items.length > 0 ? false : true}>Passer au payement</Button>
                <br></br><br></br>
            </Container>
            </div>
        )
    }