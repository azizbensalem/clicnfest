import React , { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
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


export default function Boisson() {
    const classes = useStyles();
    const [type, setType] = React.useState("");
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const [boisson, setBoisson] = React.useState([]);
    // const [loading, setLoading] = React.useState(true);
    const Produit = [
      {
        title: "Standard license",
        volume: "1 L",
        prix: "500",
        type: "Boisson gazeuse",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "Mabs",
        volume: "Aziz",
        prix: "250",
        type: "Jus",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "license",
        volume: "1 L",
        prix: "500",
        type: "Boisson gazeuse",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "Noussa",
        volume: "Aziz",
        prix: "250",
        type: "Jus",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "CA",
        volume: "1 L",
        prix: "500",
        type: "Boisson gazeuse",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "isamm",
        volume: "Aziz",
        prix: "250",
        type: "Jus",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "Coca",
        volume: "1 L",
        prix: "500",
        type: "Boisson gazeuse",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: "",
      },
      {
        title: "Tunisie",
        volume: "Aziz",
        prix: "250",
        type: "Jus",
        img: "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
        description: ""
      }]

    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
    //     }).then(res => {
    //         setBoisson(res.data);
    //         // setLoading(false)
    //     });
    //   });
    
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = Produit.filter(item =>
            item.title.toString().toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
        console.log(currentPosts);

    }, [searchTerm]);
    
    const [page, setPage] = React.useState(1);
    const currentPosts = searchResults.slice(page*5-5, page*5);

    const change = (event, value) => {
      setPage(value);
    }
    return (
      <div>
        <form noValidate autoComplete="off">
          <FormControl variant="outlined">
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
              <option value="After Work">Boisson gazeuse</option>
            </Select>
          </FormControl>
        </form>
        <br></br>
        { currentPosts.length > 0 ?
          currentPosts.map(boisson => (
          <Product image={boisson.img} titre={boisson.title} volume={boisson.volume} 
          type={boisson.name} prix={boisson.prix} description={boisson.description} /> )) :
          <Typography variant="h6" style={{ textAlign: 'center'}}>Aucun résultat</Typography>
        }
        {searchResults.length > 5 ? 
        <Pagination count={Math.round(searchResults.length / 5)} page={page} onChange={change} color="primary" />
         : null }
      </div>
    );
}