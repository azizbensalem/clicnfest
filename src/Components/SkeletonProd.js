import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Skeleton from "@material-ui/lab/Skeleton";
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "auto",
        color: theme.palette.text.secondary
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },

    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


export default function Boisson() {
    const classes = useStyles();

return (
<Paper className={classes.paper}>
    <Grid container spacing={2}>
        <Grid item>
            <div>
                <div className={classes.sectionMobile}>
                    <Skeleton variant="rect" width={190} height={190} />
                </div>
                <div className={classes.sectionDesktop}>
                    <Skeleton variant="rect" width={128} height={128} />
                </div>
            </div>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Grid>
                <Grid item>
                    <Skeleton variant="text" />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Paper>
    )
}
