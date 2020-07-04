import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import ConfirmPrestataire from './ConfirmPrestataire';

const useStyles = makeStyles(theme => ({
    button: {
        paddingTop: '15px',
    },
}));

export const PrestataireItem = () => {
  const items = useSelector((state) => state.prestataire.addedItems);
  const lengthItems = items.length;
  return lengthItems;
};

export const CartPrestataire = ({ page }) => {
    const items = useSelector(state => state.prestataire.addedItems);
    const classes = useStyles();
        return (
            <div>
                {items.map(item => (
                        <div className={classes.button}>
                            <ConfirmPrestataire image={item.img} titre={item.nom_prestataire} volume={item.volume}
                                type={item.type} prix={item.prix} quantity={item.quantity}
                                id={item.id} page={page}/>
                        </div>
                ))
                }         
            </div>   
        );
    };