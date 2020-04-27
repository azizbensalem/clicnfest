import React from 'react';
import AppBar from '../../Header/Navbar';
import { makeStyles } from "@material-ui/core/styles";
import Show from './Show';

export default function Profil() {
    return(
    <div>
        <AppBar />

            <Show />
    </div>
    );
}