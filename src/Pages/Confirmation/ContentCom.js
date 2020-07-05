import React from 'react';
import { Total } from './Total'
import AppBar from '../../Components/Header/Navbar';
import { Button, Container, Typography } from '@material-ui/core';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import { CartProduit } from '../Produits/CartProduit';
import { CartLieux } from '../Lieux/CartLieux';
import { CartPrestataire } from '../Prestataire/CartPrestataire';
import { CartMenu } from '../Menus/CartMenu';


const useStyles = makeStyles(theme => ({
    height : {
        minHeight: '100vh'
    },
    padding: {
        padding: '20px',
    },
    button: {
        paddingTop: '15px',
    },
    paddingTop: {
        paddingTop: '40px',
    },
    paddingButton: {
        marginLeft: theme.spacing(1),
    }
}));


    export const Commande = ({ page }) => {
        const history = useHistory();
        const ProduitItems = useSelector(state => state.produit.addedItems).length;
        const MenuItems = useSelector(state => state.menu.addedItems).length;
        const LieuxItems = useSelector(state => state.lieux.addedItems).length;
        const PrestataireItems = useSelector(state => state.prestataire.addedItems).length;
        const items = ProduitItems + MenuItems + LieuxItems + PrestataireItems;
        const classes = useStyles();
        const ref = React.createRef();
        return (
            <div className={classes.height}>
            <AppBar />
            <Container className={classes.paddingTop}>
                <Typography variant="h6">Confirmer la commande</Typography>
                <div ref={ref}>
                    <CartLieux page={page} />
                    <CartMenu page={page} />
                    <CartProduit page={page} />
                    <CartPrestataire page={page} />
                    <Total />
                </div>
                <Button onClick={() => history.push('/evenements/lieux')}
                className={classes.paddingButton} >Retour</Button>
                <Button onClick={() => history.push('/evenements/organisation')} 
                variant="contained" color="primary"
                className={classes.paddingButton} 
                disabled={items > 0 ? false : true}>Créer un événement</Button>
                <ReactToPdf targetRef={ref} filename="devis.pdf">
                    {({toPdf}) =>  (
                        <Button onClick={toPdf}
                        variant="contained" color="secondary" 
                        className={classes.paddingButton} 
                        disabled={items > 0 ? false : true}>Générer un devis</Button>
                    )}
                </ReactToPdf>
                <br></br><br></br>
            </Container>
            </div>
        )
    }