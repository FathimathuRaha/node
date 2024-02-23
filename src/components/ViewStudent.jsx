import React, { useState,useEffect } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';

const ViewStudent = () => {
    var [user,setuser]=useState([]);
    useEffect(()=>{
     axios.get("http://localhost:4001/students").then((response)=>{
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
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell >{val.students_name}</TableCell>
                                <TableCell >{val.students_age}</TableCell>
                                <TableCell >{val.students_dept}</TableCell>
                                <TableCell>
                                    <Button variant='contained' color='success'>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained' color='error'> Delete</Button>
                                </TableCell>
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