import React from 'react';
import logo from './logo.svg';
import './App.css';
import Constant from './constant'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {      
      display:''
    }
  }
  

  async getsomeResponse(){
    await fetch(Constant.API_HOST_ADDRESS + '/getResponse',{
    }).then(res => {
      console.log('response',res.status);
      return res.json();
  }).then(data => {
      console.log("data",data.data);
      var result = data.data;
      this.setState({
        display:result
      })
  });
};

render(){
  return (
    <div className="App">
      <header className="App-header">
  <button onClick={() =>this.getsomeResponse()} >getResponse from server</button>
  <h4>{this.state.display}</h4>
      </header>
    </div>
  );
}
}

export default App;
