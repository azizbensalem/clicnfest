import React from 'react';
import { Total } from './Total'
import AppBar from '../../Components/Header/Navbar';
import ProdCom from '../../Components/ProdCom';
import { Button, Container, Typography } from '@material-ui/core';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";


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


    export const Commande = ({ page }) => {
        const history = useHistory();
        const items = useSelector(state => state.addedItems);
        const classes = useStyles();
        const ref = React.createRef();
        return (
            <div className={classes.height}>
            <AppBar />
            <Container className={classes.paddingTop}>
                <Typography variant="h6">Confirmer la commande</Typography>
                <div ref={ref}>
                    <ContentCom page={page}/>
                </div>
                <Button onClick={() => history.push('/evenements/lieux')}
                className={classes.paddingButton} >Retour</Button>
                <Button onClick={() => history.push('/evenements/organisation')} 
                variant="contained" color="primary"
                className={classes.paddingButton} 
                disabled={items.length > 0 ? false : true}>Passer au payement</Button>
                <ReactToPdf targetRef={ref} filename="devis.pdf">
                    {({toPdf}) =>  (
                        <Button onClick={toPdf}
                        variant="contained" color="secondary" 
                        className={classes.paddingButton} 
                        disabled={items.length > 0 ? false : true}>Générer un devis</Button>
                    )}
                </ReactToPdf>
                <br></br><br></br>
            </Container>
            </div>
        )
    }