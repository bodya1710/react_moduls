import React, {useState} from 'react';

import './FormStyle.css'
const Form = ({getFilter}) => {
    const [form, setForm] = useState({name:'', username:'', email:''});

    function formHandler(e) {
       const eData = ({...form,[e.target.name]:e.target.value})
        setForm({...form,...eData})
        getFilter(eData)
    }

    function send(e) {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={send}>
                <div><label>Name:<input type="text" value={form.name} name={'name'} onChange={formHandler}/></label></div>
                <div><label>Username:<input type="text" value={form.username} name={'username'} onChange={formHandler}/></label></div>
                <div><label>Email:<input type="text" value={form.email} name={'email'} onChange={formHandler}/></label></div>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;