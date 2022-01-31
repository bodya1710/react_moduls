import React from 'react';
import {Dog} from "../Dog/Dog";

const Dogs = ({dogs,dispatch}) => {
    return (
            <div>
                {dogs.map(item => <Dog key={item.id} element={item} dispatch={dispatch}/>)}
            </div>

    );
};

export {Dogs};