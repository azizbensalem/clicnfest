import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    content: {
        textAlign: "center",
        paddingBottom: "40px",
        paddingTop: "40px",
    },
    img: {
        width: "150px",
        borderRadius: "360px",
        height: "150px"
    },
    image: {
        textAlign: "center",
        paddingTop: "40px",
    },
    input: {
        display: 'none',
    },
}));
export default function Show() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.image}>
                    <img
                        className={classes.img}
                        src='https://kwsmdigital.com/wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg' />
                    <div>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Changer la photo de profil
                            </Button>
                        </label>
                    </div>
                </div>
                <div className={classes.content}>
                    <div>
                        <TextField
                            id="outlined-read-only-input"
                            label="Nom d'utilisateur"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Nom"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-read-only-input"
                            label="Prénom"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Téléphone"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-read-only-input"
                            label="Email"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                    </div>
                    <Button variant="contained" color="primary" type="submit">Confirmer</Button>
                </div>
            </form>
        </div> 
    );
}