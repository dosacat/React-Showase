import './App.css';
import React from 'react';
import Overview from "./components/info";
import Edu from "./components/edu";
import Work from "./components/work";
import Preview from './components/preview';
import { Button } from './components/addbtn';


function App() {

  const [inputs,changeInputs]= React.useState({
    fname:"Jane",
    lname:"Doe",
    num:"+123 456789",
    mail:"janedoe@foo.com"
  });

  const [work,setWork]=React.useState([{
    role:"Data trainee",
    comp:"Atlantic",
    start:"May 2011",
    end:"Feb 2019"
  }])

  const [edu,setEdu]=React.useState([{
    uni:"Hogwarts University",
    major:"Physics",
    year:"2009",
    gpa:"7.33"  }])

  function addComponent(){
    setWork([...work,{role:"",
    comp:"",
    start:"",
    end:""}])
    
    }
  function addEdu(){
    console.log("function works")
    setEdu([...edu,{uni:"",
      major:"",
      year:"",
      gpa:""}])
    
    }
  

  return (
      <div className='main'>
        <div className="form">
        <Overview inputs={inputs} alter={changeInputs}/>

        <h2>Work Experience</h2>
        {work.map((item,i) => ( <Work work={item} id={i} setWork={setWork} arr={work}/> ))}
        <Button onClick={addComponent} className="add" text="Add"/>

        <h2>Education   </h2>
        {edu.map((elem,i) => ( <Edu edu={elem} id={i} setEdu={setEdu} arr={edu}/> ))}
        <Button onClick={addEdu} className="add" text="Add"/>
        
        </div>
        <div className='cv__view'>
        <Preview inputs={inputs}  work={work} edu={edu}/>
        
        </div>
        
      </div>
      
    );
  
  

};

export default App;
