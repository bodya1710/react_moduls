import React from 'react';

const Dog = ({element:{id, note},dispatch}) => {

    return (

            <div>
                {note}
                <button onClick={()=>dispatch({type:'delet_dog' , payload: id})}>Delete</button>
            </div>

    );
};

export {Dog};