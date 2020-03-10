import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  WidthInput: {
    "& > *": {
      margin: theme.spacing(1),
      minWidth: 300,
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "auto",
    color: theme.palette.text.secondary
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
}));

export default function Commande() {
    const classes = useStyles();
    const [type, setType] = React.useState("");
    const [partner, setPartner] = React.useState("");

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
      setType(event.target.value);
    };

    const partnerChange = event => {
        setPartner(event.target.value);
    };

    return (
      <div className={classes.root}>
        <Typography variant="h6">Choisir les produits</Typography>
        <br></br>
        <form className={classes.WidthInput} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Nom du produit"
            variant="outlined"
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Type du produit
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={type}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value={10}>Boisson Gazeuse</MenuItem>
              <MenuItem value={20}>Biscuit</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Partenaire
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={partner}
              onChange={partnerChange}
              labelWidth={labelWidth}
            >
              <MenuItem value={10}>Tunivisions</MenuItem>
            </Select>
          </FormControl>
        </form>
        <br></br>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
                />
              </ButtonBase>
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
                  <Button>Voir les détails</Button>
                  <Button>Ajouter au panier</Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">19.000 DT</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br></br>
      </div>
    );
}