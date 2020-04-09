import React from 'react'
import { useSelector } from "react-redux";

export const Somme = () => {
    const total = useSelector(state => state.total);
    return (
        <div>{total} DT</div>
    );
};

export const Total = () => {
    const total = useSelector(state => state.total);
        return(
            <div className="container">
                    <div className="collection">
                        <b>Total: {total} DT</b>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }

