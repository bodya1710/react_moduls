import React from 'react';

import css from './Form.module.css'

const Form = ({dispatch}) => {

    return (
        <div className={css.wrap_form}>
            <hr/>
            <form onSubmit ={(e)=>{dispatch({type:'cats' , payload: e})}}>
                <label>Add Cat: <input type="text" /></label>
                <button>Save</button>
            </form>
            <form onSubmit ={(e)=>{dispatch({type:'dogs' , payload: e})}}>
                <label>Add Dog: <input type="text" /></label>
                <button>Save</button>
            </form>
            <hr/>
        </div>
    );
};

export {Form};