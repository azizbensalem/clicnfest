import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, Typography, Button, Container, Paper } from "@material-ui/core";
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import Product from '../../Product';
import { useDispatch, useSelector } from "react-redux";
import AppBar from '../../Header/Navbar';
import { Menu } from '../../Tabs';
import { TotalSb } from '../../Footer/TotalSb';
import ScrollTop from '../../Footer/ScrollTop';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "auto",
        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220
    },
    padding: {
        paddingTop: '40px',
        paddingBottom: '80px',
    },
    image: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2019/10/%D8%A7%D9%81%D8%B6%D9%84-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-DJ.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    title: {
        paddingTop: '21vh',
        fontWeight: 'bold',
    },
}));


export const Extras = () => {
    const classes = useStyles();
    const [type, setType] = React.useState("");
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = boissons.filter(item =>
            item.title.toString().toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
        console.log(currentPosts);

    }, [searchTerm]);

    const [pages, setPages] = React.useState(1);
    const currentPosts = searchResults.slice(pages * 5 - 5, pages * 5);

    const change = (event, value) => {
        setPages(value);
    }
    const boissons = useSelector(state => state.items);
    return (
        <div>
            <AppBar />
            <Menu value={3} />
            <div className={classes.image}>
                <Typography variant="h3" className={classes.title}>EXTRAS</Typography>
            </div>
            <Container className={classes.padding}>
                <Typography variant="h5">Extras</Typography><br></br>
                <form noValidate autoComplete="off">
                    <Paper className={classes.paper}>
                        <Typography variant="h6">Recherche</Typography><br></br>
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
                                labelWidth={labelWidth}
                            >
                                <option value="Jus">Jus</option>
                                <option value="Boisson gazeuse">Boisson gazeuse</option>
                                <option value="Boisson gazeuse">Boisson énergétique</option>
                            </Select>
                        </FormControl>
                    </Paper>
                </form>
                <br></br>
                {currentPosts.length > 0 ?
                    currentPosts.map(boisson => (
                        <div>
                            <Product image={boisson.img} titre={boisson.title} volume={boisson.volume}
                                type={boisson.type} prix={boisson.prix} description={boisson.description}
                                id={boisson.id} />
                        </div>)) :
                    <Typography variant="h6" style={{ textAlign: 'center' }}>Aucun résultat trouvé</Typography>
                }
                {searchResults.length > 5 ?
                    <Pagination count={Math.round(searchResults.length / 5)} page={pages} onChange={change} color="primary" />
                    : null}
            </Container>
            <TotalSb page="boissons" />
            <ScrollTop />
        </div>
    );
};