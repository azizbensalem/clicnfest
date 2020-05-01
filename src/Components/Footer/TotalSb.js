import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Somme } from '../Pages/Confirmation/Total';
import { Detail } from '../Detail';
import { Typography, SnackbarContent } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export const TotalSb = ({ page }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Snackbar
                open
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                autoHideDuration={6000}
                className={classes.snackbar}
            >
                <SnackbarContent
                    style={{ backgroundColor: '#4caf50' }} 
                    message={<Typography variant="h6"><Somme /></Typography>}
                    action={<Button color="inherit" size="small" onClick={handleClickOpen}>
                        Voir les détails
                     </Button>}
                />
            </Snackbar>
            <Detail handleClose={handleClose} open={open} page={page} />
        </div>
    );
}