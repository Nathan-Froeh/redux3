
import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <div>
      {/* <p>{props.idea}</p> */}
      <p>{props.idea.name}</p>
      <p>{props.idea.date}</p>
      <p>{props.idea.time}</p>
      <p>{props.idea.number}</p>
    </div>
  )
}

export default Card;