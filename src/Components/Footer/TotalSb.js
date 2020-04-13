import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Somme } from '../../Pages/Total';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function TotalSb() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Snackbar
                open
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                autoHideDuration={6000}
                message={<Somme />}
                action={
                    <Button color="inherit" size="small">
                        Voir les détails
            </Button>
                }
                className={classes.snackbar}
            />
        </div>
    );
}