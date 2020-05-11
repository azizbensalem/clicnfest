import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {

    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


export const Detail = ({ handleClose, open, image, titre, volume, type, prix, description }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <Dialog fullScreen={fullScreen} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {titre}
                </DialogTitle>
                <DialogContent dividers>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid xs>
                            <img style={{ width: 180 }} src={image} />
                            </Grid>
                            <Grid xs>
                                <Typography gutterBottom>{type}</Typography>
                                <Typography gutterBottom>{volume}</Typography>
                                <Typography gutterBottom>{prix}&nbsp;DT</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Typography gutterBottom>
                        {description}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
