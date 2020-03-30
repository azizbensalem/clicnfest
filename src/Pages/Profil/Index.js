import React from 'react';
import AppBar from '../../Components/Header/Navbar';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Show from './Show';
import { Route, Switch } from "react-router-dom";


const useStyles = makeStyles(theme => ({


}));
export default function Profil() {
    const classes = useStyles();
    return(
    <div>
        <AppBar />

            <Show />
    </div>
    );
}