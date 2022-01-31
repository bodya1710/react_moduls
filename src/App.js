import {useReducer} from "react";

import {Cats, Dogs, Form} from "./componets";

import css from './App.module.css';

const  reducer = (state, action) => {

    if (action.type === 'cats'){
        action.payload.preventDefault()
        return {...state, cats: [...state.cats, {id: new Date().getUTCMilliseconds(),note: action.payload.target[0].value}]}
    }
    if (action.type === 'dogs'){
        action.payload.preventDefault()
        return {...state, dogs: [...state.dogs, {id: new Date().getUTCMilliseconds(),note: action.payload.target[0].value}]}
    }
    if (action.type === 'delet_cat'){
        return {...state, cats: state.cats.filter((item) => item.id !== action.payload)}
    }
    if (action.type === 'delet_dog'){
        return {...state, dogs: state.dogs.filter((item) => item.id !== action.payload)}
    }
    return state

}

function App() {
  const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]});

  return (
     <div>
      <Form dispatch={dispatch}/>
       <div className={css.wrap_container_animal}>
         <Cats cats={state.cats} dispatch={dispatch}/>
         <Dogs dogs={state.dogs} dispatch={dispatch}/>
       </div>
    </div>
  );
}

export default App;
