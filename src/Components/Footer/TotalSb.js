import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Somme } from '../../Pages/Total';
import { Detail } from '../Detail';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function TotalSb() {
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
                message={<Somme />}
                action={
                    <Button color="inherit" size="small" onClick={handleClickOpen}>
                        Voir les détails
                     </Button>
                }
                className={classes.snackbar}
            />
            <Detail handleClose={handleClose} open={open} />
        </div>
    );
}