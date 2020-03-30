import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import Product from '../../../Components/Product';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220
    },
}));

export default function SucreeSale() {
    const classes = useStyles();
    const [type, setType] = React.useState("");
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const [ss,setSs] = React.useState([{
        title : "Standard license",
        volume: "1 L",
        prix: "500",
        type: "Boisson gazeuse",
        img : "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
    },
    {
        title : "Mabs",
        volume: "Aziz",
        prix: "250",
        type: "Jus",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg"
    }
]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = ss.filter(person =>
            person.title.toString().toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);
    

    return (
             <div>
                    <form noValidate autoComplete="off">
                        <FormControl variant="outlined" >
                            <TextField
                                id="outlined-basic"
                                label="Nom du produit"
                                variant="outlined"
                                className={classes.formControl}
                                value={searchTerm}
                                onChange={handleChange}
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
                                labelWidth={labelWidth}
                            >
                            <option value="Sucrée">Sucrée</option>
                            <option value="Salé">Salé</option>
                            </Select>
                        </FormControl>
                    </form>
                    <br></br>
                   { searchResults.map(ss => (
                    <Product image={ss.img} titre={ss.title} volume={ss.volume} type={ss.type}
                    prix={ss.prix} />
                   ))}
                </div>
    );
}