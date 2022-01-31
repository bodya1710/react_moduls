import React from 'react';

const Cat = ({element:{id, note},dispatch}) => {
    return (
        <div>
            {note}
            <button onClick={()=>{dispatch({type:'delet_cat' , payload: id})}}>Delete</button>
        </div>
    );
};

export {Cat};