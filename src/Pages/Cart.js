import React from 'react';
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../Components/actions/cartActions';
import { Total } from './Total'
import AppBar from '../Components/Header/Navbar';
import ProdCom from '../Components/ProdCom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Etape from '../Components/Etape';
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

export const Cart = () => {
    //to remove the item completely
    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }
    //to add the quantity
    const handleAddQuantity = (id) => {
        dispatch(addQuantity(id));
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id) => {
        dispatch(subtractQuantity(id));
    }
    const items = useSelector(state => state.addedItems);
    const dispatch = useDispatch();
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
    const history = useHistory();
        return (
            <div>
                <AppBar />
                    <Container>
                    <Etape activeStep={3} />
                    <Typography variant="h6">Confirmer la commande</Typography>
                    {addedItems}
                    <Total />
                    <Button onClick={() => history.push('/commande')}>Retour</Button>
                    <Button variant="contained" color="primary" disabled={addedItems.length > 0 ? false : true}>Passer au payement</Button>
                    </Container>
            </div>
        );
    };
