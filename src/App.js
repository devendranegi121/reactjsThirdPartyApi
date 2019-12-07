import React from 'react'; 
import './App.css';
import Employ from './employ';
//import {CreateStore} from 'redux';
import Addform from './addform'
class App extends React.Component {
  constructor() {
     super();


    this.state = {isLoaded:false, items:[]};
    this.addItem= this.addItem.bind(this);
  }

  addItem(data){
    console.log(data);
    console.log(this.state.items);
    this.setState(prevState => ({
       items: [...prevState.items, data]
    }))
  }
   
  render() {
    return (
      <div>
      <table>
        <Employ info={this.state}> </Employ>
      </table>
        <Addform addItem={this.addItem} />

      
      </div>
    );
  }
}

export default App;
