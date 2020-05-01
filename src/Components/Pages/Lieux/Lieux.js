import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, Typography, Button, Container } from "@material-ui/core";
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import Product from '../../Product';
import { useDispatch, useSelector } from "react-redux";
import AppBar from '../../Header/Navbar';
import { Menu } from '../../Tabs';
import TotalSb from '../../Footer/TotalSb';
import ScrollTop from '../../Footer/ScrollTop';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220
    },
    padding: {
        paddingTop: '40px',
        paddingBottom: '80px',
    },

}));


export const Lieux = () => {
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

    const [page, setPage] = React.useState(1);
    const currentPosts = searchResults.slice(page * 5 - 5, page * 5);

    const change = (event, value) => {
        setPage(value);
    }
    const boissons = useSelector(state => state.items);
    const dispatch = useDispatch();
    return (
        <div>
            <AppBar />
            <Menu value={0} />
            <Container className={classes.padding}>
                <Typography variant="h6">Lieux</Typography><br></br>
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
                {currentPosts.length > 0 ?
                    currentPosts.map(boisson => (
                        <div>
                            <Product image={boisson.img} titre={boisson.title} volume={boisson.volume}
                                type={boisson.type} prix={boisson.prix} description={boisson.description}
                                id={boisson.id} />
                        </div>)) :
                    <Typography variant="h6" style={{ textAlign: 'center' }}>Aucun résultat trouvé</Typography>
                }
                {currentPosts.length > 5 ?
                    <Pagination count={Math.round(currentPosts.length / 5)} page={page} onChange={change} color="primary" />
                    : null}
            </Container>
            <TotalSb />
            <ScrollTop />
        </div>
    );
};