import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// for development
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root')
  if (el) {
    mount(el)
  }
}


export {mount}