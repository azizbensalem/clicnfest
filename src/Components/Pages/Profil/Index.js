import React from 'react';
import AppBar from '../../Header/Navbar';
import { makeStyles } from "@material-ui/core/styles";
import Show from './Show';


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