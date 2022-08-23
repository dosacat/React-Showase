import React  from "react";
import './style.css';

function Overview({inputs,alter}){
  const fname=inputs.fname;
  const lname=inputs.lname;
  const num=inputs.num;
  const mail=inputs.mail;

  function updateRespnose(event){
    alter({
      ...inputs,
      [event.target.name]:event.target.value
    })
  }
  
    return(
      <div>
        <h1>CV Generator</h1>
        
      <form>
        <h2>Personal Information:</h2>
        <label>First Name:</label><input type="text" name="fname" onChange={updateRespnose} value={fname} />
        <label>Last Name:</label><input type="text" name="lname" onChange={updateRespnose} value={lname}/>
        <label>Number:</label><input type="text" name="num" onChange={updateRespnose} value={num}/>
        <label>Email id:</label><input type="text" name="mail" onChange={updateRespnose} value={mail}/>
      </form>

      </div>
      
        
    )
}

export default Overview;