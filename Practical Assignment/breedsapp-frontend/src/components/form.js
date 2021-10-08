
import React, { useState } from "react";

import "./styles.css";

const from = () => {
  const [inputs, setInputs] = useState({});
    
  
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Sucessfully");
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name} 
        onChange={handleChange}
      />
      </label>
     
      <label>Description:
        <textarea
        name= "description" 
        value={inputs.descrition} 
        onChange={handleChange} 
      />
      </label>
      
      <label>Adaptability:
        <input 
          type="number" 
          name="adaptability" 
          value={inputs.adapatability} 
          onChange={handleChange}
        />
        </label>
       
        <label>Affection Level:
        <input 
          type="number" 
          name="affection_level" 
          value={inputs.affection_level} 
          onChange={handleChange}
        />
        </label>
        
        <label>Child Friendly:
        <input 
          type="number" 
          name="child_friendly" 
          value={inputs.child_friendly} 
          onChange={handleChange}
        />
        </label>
       
        <label>Energy Level:
        <input 
          type="number" 
          name="energy_level" 
          value={inputs.energy_level} 
          onChange={handleChange}
        />
        </label>
       
        <label>Stranger Friendly:
        <input 
          type="number" 
          name="stranger_friendly" 
          value={inputs.stranger_friendly} 
          onChange={handleChange}
        />
        </label>
        
       
        <input type="submit" />
    </form>
  );
  };
