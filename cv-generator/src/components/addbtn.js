/* Write a button component */ 

import React from 'react'; 

const Button = (props) => { 
  
  return ( 
    
    <button type="submit" onClick={props.onClick} className={props.className} >{props.text}</button> 
    
  ); 
  
} 

export {Button};
