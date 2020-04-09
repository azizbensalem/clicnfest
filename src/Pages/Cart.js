import React from 'react';
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../Components/actions/cartActions';
import { Total } from './Total'
import AppBar from '../Components/Header/Navbar';
import Product from '../Components/Product';
import { Button, Container } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";


export const Cart = () => {
    //to remove the item completely
    const handleRemove = (id) => {
        removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id) => {
        addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id) => {
        subtractQuantity(id);
    }
    const items = useSelector(state => state.addedItems);
    const dispatch = useDispatch();
        let addedItems = items.length ?
            (
                items.map(item => {
                    return (
                        <div>
                            <Product image={item.img} titre={item.title} volume={item.quantity}
                            type={item.name} prix={item.prix} description={item.desc} />
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { dispatch(handleAddQuantity(item.id)) }}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { dispatch(handleSubtractQuantity(item.id)) }}>arrow_drop_down</i></Link>
                            </div>
                            <Button color="secondary" onClick={() => { dispatch(handleRemove(item.id)) }}>Supprimer</Button>
                        </div>
                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div>
                <AppBar />
                    <Container>
                    <h5>You have ordered:</h5>
                    {addedItems}
                    <Total />
                    </Container>
            </div>
        )
    }
