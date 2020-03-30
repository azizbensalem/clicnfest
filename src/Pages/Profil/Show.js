import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Edit from './Edit';
import { Typography, Button } from '@material-ui/core';


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

}));
export default function Show() {
    const classes = useStyles();
    const [state, setState] = React.useState(true);
    const modifier = () => {
        setState(false);
    }
    const history = useHistory();

    return(
        <div>
        {state ? <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.image}>
                    <img
                        className={classes.img}
                        src='https://kwsmdigital.com/wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg' />
                    <Typography variant="h5">Foulen el fouleni</Typography>
                </div>
            <div className={classes.content}>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Nom d'utilisateur"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Nom"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Prénom"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Téléphone"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Email"
                        style={{ textAlign: 'initial' }}
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                </div>
                    <Button variant="contained" color="secondary"  onClick={modifier}>Modifier</Button>
            </div>
                    </form> : <Edit/> }
        </div>
    );
}