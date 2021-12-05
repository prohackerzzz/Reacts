
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import React, { useReducer,createContext,useState } from 'react';

export const context= createContext()
export const cont = createContext()
function App() {
  const initial=0;
  const reducer=(state,action)=>{
    if(state==0 && action.type=="Sub"){
      return 0
    } 
    if(state>-1){
    switch(action.type){
      case 'Add':
        return state+1
      
      case 'Sub':
        return state-1
        
      default:
        return state
    }
    }
  else{
    return state
  }
}
  const [state,dispatch] = useReducer(reducer,initial)
  
  const [name,setname] = useState('Rehan')
  return (
    <context.Provider value={[name,setname]}>
    <cont.Provider value={{state,dispatch}}>
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
    </cont.Provider>
    </context.Provider>
    
  );
}

export default App;
