import React,{useEffect, useState} from 'react';
import axios from 'axios';

import {Table} from 'react-bootstrap';



function Home() {

const [state,setState]=useState([])
const [newStudent,setNewStudent]=useState({
  name:"",
})


useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
    //console.log(data.data)
    setState(data["data"]);
  }).catch(err=>{
    console.log("error occ",err)
  })
  
}, [])

const handleChange=(e)=>{
setNewStudent({...newStudent,[e.target.name]:e.target.value})
// console.log(newStudent)
}

const handleClick=()=>{
  axios.post("https://jsonplaceholder.typicode.com/users",{newStudent}).then
  (data=>{
    console.log(data.data)
    setNewStudent(data.data)

  })
}





    return (
 <div>
<h1>Digikull Student</h1>
<h3> Hello User </h3>
<input type="text" placeholder="Enter Customer Name"  name="name" onChange={handleChange}/> 
<button id='btn' onClick={handleClick}>ADD </button>
        <br/><br/><br/>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Student Name</th>
     
    </tr>
  </thead>
  <tbody>
    {
      state.map(ele=>(
        <tr>
      <td>{ele.name}Name</td>
      
    </tr>

      ))
    }
    
   
  </tbody>
</Table>

        </div>
    )
}

export default Home
