import React from 'react'

function Card(props) {
  return (
    <div className="bg-white mt-60 mx-auto max-w-6xl rounded-7xl shadow-lg">{props.children}</div>
  )
}

export default Card