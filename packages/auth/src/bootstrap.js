import React from 'react'
import {createMemoryHistory, createBrowserHistory} from 'history'
import ReactDOM from 'react-dom'

import App from './App'

const mount = (el, { onNavigate, onSignin, defaulHistory, initialPath, }) => {
  const history = defaulHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(
    <App history={history} onSignin={onSignin} />,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname}) {
      const { pathname } = history.location;
      if (pathname !== nextPathname ) {
        history.push(nextPathname);
      }
    }
  }
}

// for development
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-dev-root')
  if (el) {
    mount(el, {
      defaulHistory: createBrowserHistory(),
    })
  }
}


export {mount}