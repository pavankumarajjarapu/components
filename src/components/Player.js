import React from 'react'

function Player(props) {
  return (
    <div>
      <div className='player_container'>
        <img src={props.src}></img>
        <h2>NAME:{props.name}</h2>
        <h2>TEAM:{props.team}</h2>
        <h2>S/R:{props.sr}</h2>
        
      </div>
      
    </div>
  )
}

export default Player
