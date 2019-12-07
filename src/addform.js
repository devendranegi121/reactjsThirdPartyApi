import React from 'react'; 

class Employ extends React.Component {
    constructor(){
      super ();
      this.state={employee_name:"", employee_salary:"", employee_age:""}
      this.submit=this.submit.bind(this);
      this.updateState=this.updateState.bind(this);
    }

    updateState(event){
      let nam = event.target.name;
       let val = event.target.value;
       
      console.log(nam +":"+ val)
      this.setState({
        [nam]: val
      })
    }

    submit(){
      this.props.addItem(this.state);
    }
  render() { 
     
    return (
      <div>
         <div className="form">
              <div className="formElement">  <input name="employee_name" placeholder="Name"  value = {this.state.name} onChange = {this.updateState} ref = "name"/></div>
              <div className="formElement">  <input name="employee_salary" placeholder="salery" value = {this.state.salery} onChange = {this.updateState} ref = "salery"/></div>
              <div className="formElement">  <input name="employee_age" placeholder="age" value = {this.state.age}  onChange = {this.updateState} ref = "age"/></div>
              <button onClick={this.submit} > add</button>
         </div>
        
      </div>
    );
  }
}
export default Employ;
