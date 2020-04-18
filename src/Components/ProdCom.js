import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import { removeItem, addQuantity, subtractQuantity } from '../Components/Data/actions/cartActions';
import { useDispatch } from "react-redux";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "auto",
        color: theme.palette.text.secondary,
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

const ProdCom = ({ image, titre, volume, type, prix, description, quantity, id }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };
    const handleAddQuantity = (id) => {
        dispatch(addQuantity(id));
    };
    const handleSubtractQuantity = (id) => {
        dispatch(subtractQuantity(id));
    };

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
                                <Typography style={{ paddingRight: '60px' }} gutterBottom variant="subtitle1">
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
                                <Button color="secondary" onClick={() => { handleRemove(id) }}>Supprimer</Button>
                            </Grid>
                        </Grid>
                        <Modal handleClose={handleClose} open={open} image={image} titre={titre}
                            volume={volume} type={type} prix={prix} description={description} />
                        <Grid item>
                            <Typography variant="subtitle1">{quantity == null ? prix : prix * quantity}&nbsp;DT</Typography>
                            <Grid>
                                <Typography>Quantité</Typography>
                                <Link to="/commande"><ArrowLeftIcon onClick={() => { handleSubtractQuantity(id) }} /></Link>
                                {quantity}
                                <Link to="/commande"><ArrowRightIcon onClick={() => { handleAddQuantity(id) }} /></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper><br></br>
        </div>
    )
}
export default ProdCom;