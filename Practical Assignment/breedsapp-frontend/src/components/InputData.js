import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';


const InputData = () => {

    const [result, setResult] = useState("");
    const { register, handleSubmit } = useForm();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
          setResult(values => ({...values, [name]: value}))
        }

    const onSubmit = async e => {
        e.preventDefault();
        try{
            const body = {result};
            const response = await axios.post('http://localhost:3001/breeds',{
                
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            

        }catch(err) {
            console.error(err.message);
        }
    };

    return(
    <Fragment>
        <h1>Add Data </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      
            <input {...register("name")} placeholder="Name" type="text" value={result.name} 
            onChange={handleChange} />
            <input {...register("description")} placeholder="Description" type="textarea" value={result.description} 
            onChange={handleChange} />
            <input {...register("adaptability")} placeholder="Adapatability" type="number" value={result.adaptability} 
            onChange={handleChange} />
            <input {...register("affection_level")} placeholder="Affection Level" type="number" value={result.affection_level} 
            onChange={handleChange} />
            <input {...register("childFriendly_level")} placeholder="Childern Level" type="number" value={result.childFriendly} 
            onChange={handleChange}/>
            <input {...register("stranger_friendly")} placeholder="Stranger Friendly" type="number" value={result.starnger_friendly} 
            onChange={handleChange}/>
            <input {...register("energy_level")} placeholder="Energy Level" type="number" value={result.energy_level} 
            onChange={handleChange} />
            <input {...register("weight")} placeholder="Weight" type="number" value={result.weight} 
            onChange={handleChange} />
     

            
            <input type="submit" />
    </form>
    </Fragment>
    );
};

export default InputData;