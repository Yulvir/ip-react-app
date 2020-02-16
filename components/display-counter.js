import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const count = useSelector(state => state.count);

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
    </div>
  )
}
