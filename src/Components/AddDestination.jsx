import React, { useState } from 'react'
import { useAddDestinationMutation } from '../api/destinationAPI';

function AddDestination() {
  const[newCity,setNewCity]= useState("");
  const[newCountry,setNewCountry]= useState("");
  const[addNewDestination,results]= useAddDestinationMutation();
  const handleSubmit = (e) =>{
    e.preventDefault();
    addNewDestination({
      id: parseInt(Math.random()*10) +5,
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random()*10) +1
    })
    setNewCity("");
    setNewCountry("");
  }
  return (
    <div className='p-4 border'>
  <form onSubmit={handleSubmit}>
<div className='row col-8 offset-2'>
<h4>Enter a new destination</h4>
    <div className='col-5 p-1'>
<input type='text' value={newCity} onChange={(e) => setNewCity(e.target.value)} className='form-control' placeholder='Enter City' ></input>


    </div>
    <div className='col-5 p-1'>

    <input type='text' value={newCountry} onChange={(e) => setNewCountry(e.target.value)} className='form-control' placeholder='Enter Country' ></input>
    </div>
    <div className='col-2 p-1'> <button className='btn btn-success form-control'>ADD</button> </div>
</div>


  </form>



    </div>
  )
}

export default AddDestination