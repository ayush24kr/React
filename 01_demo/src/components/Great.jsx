import React from 'react'
const great = "Hello"
const date = new Date()
const Great = () => {
  return (
  <>
    <h1>{great}</h1>
    <p>Date : {date.getDate()}</p>
  </>
  )
}

export default Great