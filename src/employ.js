import React from 'react'; 

class Employ extends React.Component {
  
  render() { 
    const Data= this.props.info.items.map((e,i) =>  {
     return( 
      <tr key={i}><td>{e.employee_name}</td><td>{e.employee_salary}</td><td>{e.employee_age}</td></tr> 
      )
    })
    return (
      <div>
        <table>
          <thead><tr><th>Name</th><th>Salary</th><th>Age</th></tr></thead>
          <tbody>{Data}</tbody>
        </table>
      </div>
    );
  }
}
export default Employ;
