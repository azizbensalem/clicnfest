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
                <Typography><b>Total: {total} DT</b></Typography><br></br>
            </div>
        )
    }

