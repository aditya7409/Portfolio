import React,{useState,useEffect} from 'react';
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Switch } from 'react-router-dom'
import Qualifications from './Qualifications';
import Experience from './Experience'
import Hobbiess from './Hobbies'
import Achievments from './Achievments'
import Socials from './Socials';
import Loading from './Loading'

const App = () => {
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false),2500)
  })
  return (
    <>
    {loading===false ?(
      <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Navigation}/>
       <Route path="/qualifications" component={Qualifications}/>
       <Route path="/experience" component={Experience}/>
       <Route path="/hobbies" component={Hobbiess}/>
       <Route path="/achievments" component={Achievments}/>
       <Route path="/socials" component={Socials}/>
     </Switch>
     </BrowserRouter>
   ):(<Loading/>)}
    </>
  );
}
export default App;
