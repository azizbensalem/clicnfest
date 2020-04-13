import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import { addToCart , removeItem } from './actions/cartActions';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "auto",
        color: theme.palette.text.secondary
    },
    image: {
        width: 128,
        height: 128
    },
    imageMobile: {
        width: 190,
        height: 190,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}))

const Product = ({ image, titre, volume , type , prix , description , click , quantity}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    const ajouter = (id) => {
        dispatch(addToCart(id));
    };
    const supprimer = (id) => {
        dispatch(removeItem(id));
    }
    const items = useSelector(state => state.addedItems);
    let addedItems = items.length ? (
        <Button color="primary" onClick={() => supprimer(click)}>Supprimer</Button>
    )
    : 
    null
    return (
                <div>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <div>
                                    <div className={classes.sectionMobile}>
                                        <ButtonBase>
                                            <img
                                                className={classes.img}
                                                alt="complex"
                                                src={image}
                                            />
                                        </ButtonBase></div>
                                    <div className={classes.sectionDesktop}>
                                        <ButtonBase className={classes.image}>
                                            <img
                                                className={classes.img}
                                                alt="complex"
                                                src={image}
                                            />
                                        </ButtonBase>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {titre}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {volume}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {prix}
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button color="primary" onClick={handleClickOpen}>Voir&nbsp;les&nbsp;détails</Button>
                                        <Button color="primary" onClick={() => ajouter(click)}>Ajouter&nbsp;au&nbsp;panier</Button>
                                        {addedItems}
                                    </Grid>
                                </Grid>
                                <Modal handleClose={handleClose} open={open} image={image} titre={titre} 
                                volume={volume} type ={type} prix={prix} description={description} />
                                <Grid item>
                                    <Typography variant="subtitle1">{ quantity == null ? prix : prix*quantity }&nbsp;DT</Typography>
                                    {quantity != null ? (<Typography variant="subtitle1">Quantité:&nbsp;{quantity}</Typography>) : null}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper><br></br>
                </div>

    )
    
}
 
export default Product;