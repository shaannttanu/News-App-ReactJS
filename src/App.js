import './App.css';
import NavBar from './Components/NavBar';
import React, { Component } from 'react'
import News from './Components/News';
import Home from './Components/Home'
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './Components/NewsItem';
// import { Router } from 'react-router-dom/cjs/react-router-dom.min';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        {/* <Home/> */}
        {/* <News setProgress={setProgress}  pageSize={6} country="in" category="general"/> */}
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Switch>
          <Route exact path="/" key="home"><Home/></Route>
          <Route exact path="/about" key="general"><News setProgress={this.setProgress}  pageSize={6} country="in" category="general"/></Route>
          <Route exact path="/business" key="business"><News setProgress={this.setProgress}  pageSize={6} country="in" category="business"/></Route>
          <Route exact path="/entertainment" key="entertainment"><News setProgress={this.setProgress}  pageSize={6} country="in" category="entertainment"/></Route>
          <Route exact path="/general" key="General"><News setProgress={this.setProgress}  pageSize={6} country="in" category="General"/></Route>
          <Route exact path="/health" key="Health"><News setProgress={this.setProgress}  pageSize={6} country="in" category="Health"/></Route>
          <Route exact path="/science" key="Science"><News setProgress={this.setProgress}  pageSize={6} country="in" category="Science"/></Route>
          <Route exact path="/technology" key="Technology"><News setProgress={this.setProgress}  pageSize={6} country="in" category="Technology"/></Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

