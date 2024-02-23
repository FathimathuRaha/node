import React, { useState,useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';

const ViewStudent = () => {
    var [user,setuser]=useState([]);
    useEffect(()=>{
     axios.get("https://localhost:4000/students").then((response)=>{
        console.log(response.data)
        setuser(response.data);
     })
    },[])

  return (
    <div>
        <h1>View Student</h1>
      <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"blue",fontFamily:"fantasy"}}>Names</TableCell>
                        <TableCell style={{color:"blue",fontFamily:"fantasy"}}>Age</TableCell>
                        <TableCell style={{color:"blue",fontFamily:"fantasy"}}>Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.name}</TableCell>
                                <TableCell key={i}>{val.age}</TableCell>
                                <TableCell key={i}>{val.department}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewStudent