import React, { Component } from 'react';

class Buttons extends React.Component{
    constructor(props){
      super(props)
    }
    
   manageClick(filterBy){
     this.props.filterAction(filterBy,this.props.Allitems)
     
   }
    
    render(){
      return(
      <div className="btnContainer">
          <button onClick={e=>{this.manageClick("Online")}} className="btnFilter">Online</button>
          <button onClick={e=>{this.manageClick("Offline")}} className="btnFilter">Offline</button>
          <button onClick={e=>{this.manageClick("All")}} className="btnFilter">All</button>
      </div>
      )
      
    }
  }

  export default Buttons;