import React, { Component } from 'react';
import Header from './Header';
import Team from './Team_click';





  class App extends Component{

    render(){
      return(

        <div className="container">     
            <Header />
            <Team/>
        </div>
      )
    }
  }


export default App