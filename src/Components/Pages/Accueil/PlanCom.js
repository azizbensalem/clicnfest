import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Grow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '50px',
        background: '#f4f6f8',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingBottom: '20px',
    },
}));

export const Plancom = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <Container>
                <Typography variant="h4" className={classes.text}>Plan de communcition</Typography>
                <br></br>
                
            </Container>
        </div>
    );
}
