import React from 'react';

import {Cat} from "../Cat/Cat";

const Cats = ({cats,dispatch}) => {
    return (
        <div>
            {cats.map(item => <Cat key={item.id} element={item} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};