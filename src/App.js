import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      usersData:[],
      AllItems:[],
      selectedItems:[],
      isLoading:true
      
    };
  }
  
  componentWillMount(){
    
    const usersArray= ["ESL_SC2", "goncho", "cretetion", "freecodecamp", "tenderlybae", "habathcx", "RobotCaleb", "noobs2ninjas"];
    let apiResponse = []
    const header = { method: 'GET',headers: {
      'Client-ID': 'qxcf3dhze7lebm2odhqx79c7q3jf3f','accept': 'application/vnd.twitchtv.v5+json'
      }}

      const userURI ="https://api.twitch.tv/kraken/users?login=";
      const streamURI ="https://api.twitch.tv/kraken/channels/";

      const getUserData = async ()=>{
        
          return await Promise.all(usersArray.map(async (user)=>{
            
              return await fetch(userURI+user,header)
              .then(resp=>resp.json())
              .then(resp=>{
                return resp.users[0]})
              .then((resp) => {
                return ({...resp, streamURI: streamURI + resp._id})
              })
          }))
      }

      const getStreamData = async ()=>{

        return await getUserData().then(usersData=>{

          return Promise.all(
            usersData.map(async(usersData)=>{    
            return await fetch(`${streamURI}${usersData._id}`,header).then(resp=>resp.json())
            .then(respJson=>{
             return respJson
              /*this.setState({
              usersData:[...this.state.usersData,{...user,...respJson}]
             })*/
             
            })
          }))
      



        })

      }



      const getlAllData=()=>{
          return Promise.all([getUserData(),getStreamData()]).then(total=>{
            this.setState({
              isLoading:false
            })
          return console.log("DALEEE :",total)
        })
      }
      getlAllData()

      /*const getData = ()=>{
        return Promise.all(getUserData,getStreamData).then((userData,streamData)=>{
          console.log("la data vieja: ",userData,streamData)
        })
      }*/

      
      
      
      

      


      
      
    

    
      
     
    
        
        
        
      


      

  
    
    



   


    

    
    
    /*
    
     const getUserData =async ()=>{
      usersArray.map(async (user,index)=>{
      const header = { method: 'GET',headers: {
        'Client-ID': 'qxcf3dhze7lebm2odhqx79c7q3jf3f','accept': 'application/vnd.twitchtv.v5+json'
        }}
        const makeCall = await fetch("https://api.twitch.tv/kraken/users?login="+user,header)
          .then((resp)=>{
            
            return resp.json()
          }).then(userData=>{
            apiResponse.push(userData.users[0])
            
          }).then(wa=>{
            let url = "https://api.twitch.tv/kraken/channels/"+apiResponse[index]._id
            console.log("URLS: ",url)
            /*.then(resp=>resp.json())
            .then(streamData=>{
              apiResponse[index].push(streamData)
            })
          })   
      
        })
    
        console.log(apiResponse)
    
       
      }
    
    */
    


    
      
    

    

    

    


       

}

      
      
      /*
      .then(usrdet=>{
        console.log("USER DET",usrdet.users[0].logo)
        console.log("USER DET",usrdet.users[0].logo)
        if(data.stream){
            apiResponse.push({username:usrdet.users[0].name,status:"Online",detail:data.stream.channel.status,url:data.stream.channel.url,logo:usrdet.users[0].logo})
            
            return this.setState({AllItems:apiResponse})
        }
        {
          apiResponse.push({username:user,status:"Offline", logo:usrdet.users[0].logo})
          return this.setState({AllItems:apiResponse})
        }
      })
      this.setState({selectedItems:this.state.AllItems});
      this.setState({isLoading:false});
      })
      .catch(err=>{
        console.log(err);
      }); 
  
    })
    this.setState({AllItems:apiResponse})
    this.setState({selectedItems:this.state.AllItems});
    
}*/

render(){
  
  return(
    <div>
      {this.state.isLoading ? <Loader/> : <List items={this.state.selectedItems}/>}
    </div>
    )
}
}


export default App;
