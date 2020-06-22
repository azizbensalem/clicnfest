import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from '../../Data/actions/cartActions';


const useStyles = makeStyles((theme) => ({
    text: {
        paddingTop: theme.spacing(2),
    }
}));

export const ComCard = ({ id, title, rate, description, img }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    const items = useSelector(state => state.addedItems);
    const results = items.filter(item =>
        item.id.toString().toLowerCase().includes(id)
    );    
    const dispatch = useDispatch();
    const ajouter = (id) => {
        dispatch(addToCart(id));
    };
    const supprimer = (id) => {
        dispatch(removeItem(id));
    }
    let addedItems = results.length ? (
        <IconButton
            type="button"
            variant="outlined"
            onClick={() => supprimer(id)}
        >
            <DeleteForeverIcon color="secondary" />
        </IconButton>
    )
        :
        null
    return (
        <Card key={id}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={img}
                title="Réseaux sociaux"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
          </Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography className={classes.text} variant="body2" color="textSecondary" >
                    {description}
          </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <VisibilityIcon color="primary" />
                </IconButton>
                <IconButton>
                    <AddCircleIcon style={{ color: '#4caf50' }} onClick={() => ajouter(id)}/>
                </IconButton>
                    {addedItems}
            </CardActions>
        </Card>
    );
}

