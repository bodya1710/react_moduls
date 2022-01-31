import {useReducer} from "react";

const reducer = (state, action) => {
    state = {...state, count2: state.count2 + 1}
    if (action.type === 'inc'){
      return   {...state, count1:state.count1 + 1}
    }    if (action.type === 'dec'){
        return   {...state, count1:state.count1 - 1}
    } if (action.type === 'reset'){
        return   {...state, count1: action.payload, count2:action.payload }
    }

  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1:0, count2:0});

  return (
     <div>
       <div>{state.count1}</div>
       <div>{state.count2}</div>
       <button onClick={()=> dispatch({type:'inc'})}>INC</button>
       <button onClick={()=> dispatch({type:'dec'})}>DEC</button>
       <button onClick={()=> dispatch({type:'reset',payload:0})}>RESET</button>
    </div>
  );
}

export default App;
