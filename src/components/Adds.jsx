import React, { useState } from 'react'
import { Button, TextField} from '@mui/material'
import axios from 'axios';


const Adds = () => {

  var [data,setdata]=useState();
  const Inputhandler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})

 console.log(data);
 

  }


    const Submit=()=>{
      axios.post("http://localhost:4000/students",{
        students_name:data.name,
        students_age:data.age,
        studemts_dept:data.dept

      }).then(()=>{
        alert("new entry created sussessfully");
      })
    .catch(()=>{
      alert("eror saving data");
    })
  ;}
  
     

      
  return (
    <div>

<h1>Add Student</h1>
        <br />
        <TextField variant='outlined' name="username" label=" Name" onChange={Inputhandler}></TextField>
        <br /><br /><br />
        <TextField variant='outlined' name="class" label="Department" onChange={Inputhandler}></TextField>
        <br /><br /><br />
        <TextField variant='outlined' name="age" onChange={Inputhandler} label="age">

        </TextField>
        <br /><br /><br />
        <Button variant='contained' onClick={Submit}>Submit</Button>
      </div>
  )
}

export default Adds