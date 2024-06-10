import React from 'react'

function Bike(props) {
  return (
    <div>
      <div className='player_container'>
        <img src={props.link}></img>
        <h2>Name:{props.name}</h2>
        <h3>Company:{props.company} </h3>
        <p>Cc:{props.power}</p>
      </div>
    </div>
  )
}

export default Bike
