import React from 'react'
import { useSelector } from "react-redux";
import { Button, Typography } from '@material-ui/core';

export const Somme = () => {
    const total = useSelector(state => state.total);
    return (
        <div>{total} DT</div>
    );
};

export const Total = () => {
    const total = useSelector(state => state.total);
        return(
            <div>
                <Button variant="contained" color="primary" style={{ backgroundColor: '#4caf50' }} >
                    <Typography variant="h6">Total: {total} DT</Typography>
                </Button>
                <br></br><br></br>
            </div>
        )
    }

