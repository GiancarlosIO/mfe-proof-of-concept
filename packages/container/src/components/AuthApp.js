import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignin }) => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    console.log('Auth app mounted');
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignin,
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref}>

  </div>
}
