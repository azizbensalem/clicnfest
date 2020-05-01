import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const images = [
    {
        url: "https://q-cf.bstatic.com/images/hotel/max1024x768/681/68184730.jpg",
        title: 'Lieux',
        width: '33%',
    },
    {
        url: 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
        title: 'Menus',
        width: '33%',
    },
    {
        url: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg',
        title: 'Boissons',
        width: '34%',
    },
    {
        url: "https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2019/10/%D8%A7%D9%81%D8%B6%D9%84-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-DJ.jpg",
        title: 'Extras',
        width: '33%',
    },
    {
        url: 'https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg',
        title: 'Communication',
        width: '33%',
    },
    {
        url: 'https://petapixel.com/assets/uploads/2020/01/eosr_feature-800x421.jpg',
        title: 'Camera',
        width: '34%',
    },

];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '50px'
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
}));
 
export default function ButtonBases() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
         <Container>
                <Typography variant="h4" className={classes.text}>Nos offres</Typography>
            <br></br>
            {images.map(image => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                    onClick={() => history.push('/evenements/'+image.title)}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
            </Container>
        </div>
    );
}
