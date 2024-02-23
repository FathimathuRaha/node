import React, { useState } from 'react'
import { Button, TextField} from '@mui/material'
import axios from 'axios';


const Adds = (props) => {
 var [data,setdata]=useState(
  {
    id:props.data.id,
    name:props.data.name,
    age:props.data.age,
    dept:props.data.dept
  }
 );
  const Inputhandler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})

 console.log(data);
 
 
  }


    const Submit=()=>{
      axios.post("http://localhost:4001/students",{
        students_name:data.name,
        students_dept:data.dept,
        students_age:data.age

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
        <TextField variant='outlined' name="name" label=" Name" value="students_name"Change={Inputhandler}></TextField>
        <br /><br /><br />
        <TextField variant='outlined' name="dept" label="Department" onChange={Inputhandler}></TextField>
        <br /><br /><br />
        <TextField variant='outlined' name="age" onChange={Inputhandler} label="age">

        </TextField>
        <br /><br /><br />
        <Button variant='contained' onClick={Submit}>Submit</Button>
      </div>
  )
}

export default Adds