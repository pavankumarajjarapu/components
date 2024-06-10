import React from 'react'

function Movies(props) {
  return (
    <div>
      <div className='movie'>
        <h2>Movie name:{props.moviename}</h2>
        <div>
        <h2> poster</h2>
        <img src={props.image} className='image'></img></div>
        <div class="embed-responsive embed-responsive-4by3"  className='iframe'>
  <iframe class="embed-responsive-item" src= {props.trailer} allowfullscreen></iframe>
</div>
        
      </div>
    </div>
  )
}

export default Movies
