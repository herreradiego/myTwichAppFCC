import React, { Component } from 'react';



class List extends React.Component{
    constructor(props){
      super(props)
    
    }
    
    testeando(){
      console.log("TEST OK!!!!")
    }
    
    render(){
      return(
        <ul>
         
        {
        this.props.items.map((user,index)=>{
          
          console.log("list",index+JSON.stringify(user));
        
          
          if(user.status == "Offline"){
           return (<li key={index}><div className="imgContainer"><img className="userLogo"src={user.logo}/><div className="userName">{user.username}</div></div><div className="statusGame">Not Streaming <i className="ion-flash-off"></i></div></li>)
        }
          {
           return (<li key={index}><div className="imgContainer"><a target="_blank" href={user.url}><img className="userLogo"src={user.logo}/><div className="userName">{user.username}</div></a></div><div className="statusGame">{user.detail}</div></li>)
        }
  
      })
      }
          </ul>
      )
    }
  }

  export default List