import './App.css';
import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
function App(props) {
  let comp = props.routerList.filter(item=>item.component)
  let redi = props.routerList.filter(item=>item.redirect)
  return (
    <Switch>
      {comp.map((item,index)=><Route path={item.path} component={item.component} key={index} props={props}></Route>).concat(redi.map((item,index)=><Redirect from={item.path} to={item.redirect} key={index}></Redirect>))}
    </Switch>
  );
}

export default App;
