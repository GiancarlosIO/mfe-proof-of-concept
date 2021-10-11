import React, { useRef, useEffect } from 'react'
import { mount } from 'dashboard/DashboardApp'

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('Auth app mounted');
    mount(ref.current)
  }, [])

  return <div ref={ref}>

  </div>
}
