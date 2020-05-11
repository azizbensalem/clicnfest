import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Edit from './Edit';

export const Modifier = ({ handleClose, open }) => {
    const theme = useTheme();
    const styles = (theme) => ({
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
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const DialogTitle = withStyles(styles)((props) => {
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
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Modifier
                    </DialogTitle>
                    <DialogContent>
                            <Edit />
                    </DialogContent>
                    {/* <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Disagree
                            </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                Agree
                            </Button>
                    </DialogActions> */}
            </Dialog>
        </div>
    );
}
