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


const useStyles = makeStyles((theme) => ({
    text: {
        paddingTop: theme.spacing(2),
    }
}));

export const ComCard = ({ id, title, rate, description, img }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <Card>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg"
                title="Réseaux sociaux"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    AAAAAAAAAAAAAA
          </Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography className={classes.text} variant="body2" color="textSecondary" >
                    Donner le droit et l’accès aux utilisateurs de partager les évènements ainsi que le site dans les réseaux sociaux, publier des affiches et des articles sur notre nouveau concept dans nos pages Facebook etc..
          </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <VisibilityIcon color="primary" />
                </IconButton>
                <IconButton>
                    <AddCircleIcon style={{ color: '#4caf50' }} />
                </IconButton>
                <IconButton>
                    <DeleteForeverIcon color="secondary" />
                </IconButton>
            </CardActions>
        </Card>
    );
}

