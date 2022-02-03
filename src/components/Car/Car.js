import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../store";

const Car = ({car:{id,model, price, year}}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <div>{model}</div>
                <div>{price}</div>
                <div>{year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
        </div>
    );
};

export {Car};