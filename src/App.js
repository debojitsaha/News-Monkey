import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  apikey= process.env.REACT_APP_NEWS_API
  //apikey= "0bb97caeafc24c6c8e0a62b85cb09edb"  

  state={
    progress:0,
    dark: true
  }
  setProgress= (progress)=>{
    this.setState({progress:progress})
  }

  darkMode= ()=>{
    //console.log('darkMode')    
    //console.log(this.dark)
    if(this.state.dark===true){
      document.body.style.backgroundColor= '#131417'
      document.body.style.color= 'white'
      //console.log('on')
      this.setState({dark:false})
    }
    else{
      document.body.style.backgroundColor= 'white'
      document.body.style.color= 'black'
      //console.log('off')
      this.setState({dark:true})
    }
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar darkMode={this.darkMode} dark={this.state.dark} />     
          <LoadingBar
            color='cyan'
            progress={this.state.progress}
          />          
          <Switch>          
          <Route exact path="/"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="general" pageSize={18} country="in" category="general" apikey={this.apikey} /> </Route>
          <Route exact path="/business"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="business" pageSize={18} country="in" category="business" apikey={this.apikey} /> </Route>
          <Route exact path="/entertainment"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="entertainment" pageSize={18} country="in" category="entertainment" apikey={this.apikey} /> </Route>
          <Route exact path="/health"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="health" pageSize={18} country="in" category="health" apikey={this.apikey} /> </Route>
          <Route exact path="/science"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="science" pageSize={18} country="in" category="science" apikey={this.apikey} /> </Route>
          <Route exact path="/sports"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="sports" pageSize={18} country="in" category="sports" apikey={this.apikey} /> </Route>
          <Route exact path="/technology"> <News dark={this.state.dark} darkMode={this.darkMode} setProgress={this.setProgress} key="technology" pageSize={18} country="in" category="technology" apikey={this.apikey} /> </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App