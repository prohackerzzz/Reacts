import React, { createContext } from 'react'
import { useContext,useRef,useState,useEffect } from 'react'
import { context,cont } from '../App'
import {Typography} from '@material-ui/core'
import { Button } from '@material-ui/core';
import imgs from'./check2.png'
import TextField from '@material-ui/core/TextField';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        width: '50px'
    },


}))


const Main = () => {
    const classes=useStyles
    const conts = useContext(context)
    console.log(conts)
    const g = useContext(cont)
    const [kuch,setkuch] = useState({})
    const [data,setdata] = useState('')
    const [count,setcount] = useState(0)
    const [text,settext] = useState()
    const fref = useRef()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setkuch(json))

        //if(count>1){
           // alert('This is how useEffect works')
        
    },[])
    const handleClick = (e)=>{
        setdata(e.target.value)
        setcount(count+1)
    }
    const Changesome = (e)=>{
        settext(fref.current.innerHTML)
}
    const handlechan =(e)=>{
        const f=conts[1]
        console.log(f)
        f(e.target.value)
    }
    return (
        
        <div>
            <div className='first'>
            <div className="check">
            <Typography variant='h4' gutterBottom >
           <h3>I'm developing this application for showcasing my React skills. </h3>
           <p>In this application I'd tried to display the most creamy things like State, Props, Hooks, context and other things.
           You'll get to see each concept in action. So get ready...</p>
            </Typography>
            </div>
            {/*<div className='sec'>
                <img src={imgs}/> </div>*/}
            </div>
        
           <div className="second">
               <Typography variant='h4'>
               <h3>In this section I'm going to cover useStateHook.</h3>
               <div>
                   {/*<input type='text' onChange={handleClick} value={data}/>*/}
                   <form  noValidate autoComplete="off">
                    
                    <TextField id="outlined-basic" onChange={handleClick} value={data} label="Enter Text" variant="outlined" className={classes.root} className="new"  />
                    </form>
                    

                   <div>
                       <p>{count} It shows numbers of times the application is re-rendered </p>
                       <p>{!data?`Your changes will reflect here`:`${data}`}</p>
                   </div>
               </div>
            </Typography>
           </div>
           <div className='third'>
               <Typography variant='h4'>
               This section shows how to use useEffect hook.
               
               {<h4>{kuch.title}</h4>}
               It always gets rendered. I'd used json api to for getting the data from backend
           </Typography>
           </div>
           <div className="fourth">
               <Typography variant='h4' gutterBottom>
               This section depicts the working of useRef hooks.
               Generally useRef hooks are used to persist data between re-renders.
               Here I'll try to show how it works
               <div ref={fref}>This is written here to show that how useRef works</div>
            
               <Button onClick={Changesome} variant='contained' className={classes.but}>Click me</Button>
               <p>{text}</p>
               <p>On click of this button you'll see the upper div will be rendered down</p>
               It is also used to create uncontrolled forms in React
               </Typography>
           </div>
           <div className="six"> 
           <Typography variant='h4'>
               <p>This section depicts the workig of useContext hook.</p>
               <TextField id="outlined-basic" value={conts[0]} onChange={handlechan} label="Enter Text" variant="outlined" className={classes.root} className="new"/>
               <p>you'll see the text in the header changes on changing the input</p>
            </Typography> 
           </div>
           <div className="fifth">
               <Typography variant='h4'>
               This section depicts the working of useReducer hook.
               
               <div><Button onClick={()=>g.dispatch({type:'Add'})} variant='contained' className={classes.but}>Click me to Change Navbar Content</Button></div>
               <Button onClick={()=>g.dispatch({type:'Sub'})} variant='contained' className={classes.but}>Click me to Change Navbar Content</Button>
               </Typography>
           </div>
        </div>
    )
}

export default Main
