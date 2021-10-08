const express = require("express");
const request = require("request");

const app = express();
const cors = require("cors");
const pool = require("./db");

const { response } = require("express");
const { body } = require("request");

//middleware
app.use(cors());
app.use(express.json());

 
const options = { 
  method: 'GET',
  url: 'https://api.thecatapi.com/v1/breeds',
  headers: { 'x-api-key': 'c9496f17-e0da-4ba4-90df-153857f43cff' } 
};


request(
  options, async (error, _response, body) =>{
    try{
      console.log(body);
      const data = JSON.parse(body);
      
      pool.query(

        `INSERT INTO breeds (id, name, adaptability, affection_level, child_friendly, description, energy_level, weight, stranger_friendly )
         VALUES (
            data.id,
            data.name,
            data.adaptability,
            data.affection_level,
            data.child_friendly,
            data.description,
            data.energy_level,
            data.weight,
            data.stranger_friendly)
            `,
      );
      console.log('Data insert successful');
    } catch(err) {
      console.error(err.message); 
    }
  });

 

app.post("/breeds", async (req, res) => {
  try{
      const {name} = req.body;
      const newBreed = await pool.query("INSERT INTO breeds (name) VALUES($1)", [name]);
      res.json(newBreed.rows[0]);
  }catch (err){
        console.error(err.message); 
  }
});

app.get("/breeds" , async (req, res) =>{
  try{
  const allBreeds = await pool.query("SELECT * FROM breeds");
  res.json(allBreeds.rows);
} catch (err){
      console.error(err.message);    
  }
});

const port = 3001;
app.listen(port, () => {
    console.log(`server has started on port ${port}!`);
});


