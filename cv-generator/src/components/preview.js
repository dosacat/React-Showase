import React from 'react'

function Preview({inputs,work,edu}) {

  


  return (
    <>
      <div>
        <h1>{inputs.fname} {inputs.lname}</h1>
        <h3>{inputs.num} | {inputs.mail}</h3>
        <hr />
      </div>
      <br />
        <h4>Work Experience:</h4>
        {work.map(elem=>{
          return <p>{elem.role} | {elem.comp} | {elem.start} - {elem.end} </p>
        })}
        
        <br />
        <h4>Education:</h4>
        {edu.map(ed=>{
          return <p>{ed.uni} | {ed.major} | {ed.year} | GPA:{ed.gpa} </p>
        })}
        
        

    </>
    
  );
}

export default Preview;