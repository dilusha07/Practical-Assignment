import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';

const ListData = () => {
    const [data, setData] = useState([]);

   /* const deleteData = async () => {
        try {
            const deleteData = await axios(`http://localhost:3001/breeds/${id}`),{
                method: "DELETE"
            });

        }catch(err){
            console.error(err.message)
        }
    }
*/
    const getList = async () => {
        try{
            const response = axios.post('http://localhost:3001/breeds')
            const jsonData = await response.json();

            setData(jsonData);

        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        getList();
    }, []);

    console.log(data);

    return (
    <Fragment>
        <h1> List Data</h1>
        {" "}
        <table className="table mt-5 text-center borderless" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Adapatability</th>
                <th>Affection Level</th>
                <th>ChildFriendly</th>
                <th>Energy Level</th>
                <th>Weight</th>
                <th>Delete</th>     
            </tr>
            <tbody>
            {/*
                {breeds.map(data => (
                    <tr key={breeds.id}>
                        <td>{breeds.name}</td>
                        <td>{breeds.description}</td>
                        <td>{breeds.adaptability}</td>
                        <td>{breeds.affection_level}</td>
                        <td>{breeds.childfriendly}</td>
                        <td>{breeds.energy_level</td>
                        <td>{breeds.weight}</td>

                        <td>
                            <button
                            className = "btn btn-danger"
                            onClick={() => deleteData(breeds.breed_id)}>
                                Delete
                            </button>
                        </td>
                        
                    </tr>
                ))}
                */   }
        </tbody>
        </thead>
        
    </table>
</Fragment>
);



};

export default ListData;