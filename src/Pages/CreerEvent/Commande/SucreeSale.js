import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileOnly } from "react-device-detect";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "auto",
        color: theme.palette.text.secondary
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export default function SucreeSale() {
    const classes = useStyles();
    const [type, setType] = React.useState("");
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const handleChange = event => {
        setType(event.target.value);
    };
    const renderContent = () => {
        if (isMobileOnly) {
            return <div>
                <ButtonBase>
                    <img
                        className={classes.img}
                        alt="complex"
                        src="https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
                    />
                </ButtonBase></div>
        }
        return <div>
            <ButtonBase className={classes.image}>
                <img
                    className={classes.img}
                    alt="complex"
                    src="https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
                />
            </ButtonBase></div>
    };
    const [expanded, setExpanded] = React.useState(false);
    const expandChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
             <div>
                    <form noValidate autoComplete="off">
                        <FormControl variant="outlined" >
                            <TextField
                                id="outlined-basic"
                                label="Nom du produit"
                                variant="outlined"
                                className={classes.formControl}
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                Type
                                  </InputLabel>
                            <Select
                                native
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={type}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                            <option value="Sucrée">Sucrée</option>
                            <option value="Salé">Salé</option>
                            </Select>
                        </FormControl>
                    </form>
                    <br></br>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                {renderContent()}
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                            Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                            Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                            ID: 1030114
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button>Voir&nbsp;les&nbsp;détails</Button>
                                        <Button>Ajouter&nbsp;au&nbsp;panier</Button>
                                    </Grid>
                            </Grid>
                            <Grid item>
                                    <Typography variant="subtitle1">19.000 DT</Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
    );
}