import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import {Route} from 'react-router-dom'
import Search from './Search';


class Home extends Component {

  state ={
    finished:[],
    want:[],
}

addToWatch = (item)=> {
    this.setState(prevState =>({
        finished:[...prevState.finished,item]
    }))
}

addToWant = (item)=> {
    this.setState(prevState =>({
        want:[...prevState.want,item]
    }))
}

  render() {
    return(
      <div>
        <Route exact path = "/" render ={ ()=>
        
        <Header finished = {this.state.finished}
        want = {this.state.want} />  
        }/>

        <Route exact path = "/search" render ={ ()=>
        <Search finished = {this.state.finished}
        want = {this.state.want} 
        addToWant = {this.addToWant}
        addToWatch = {this.addToWatch} />  
        }/>
      </div>
    )
  }
}

export default Home;
