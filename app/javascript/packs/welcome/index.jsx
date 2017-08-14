import Home from './home'
import ReactDOM from 'react-dom'
import React from 'react'



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home name="Welcome" />,
    document.body.appendChild(document.createElement('div')),
  )
})