import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const myIp = useSelector(state => state.myIp);

  return (
    <div>
      <h1>
        MyIp: <span>{myIp}</span>
      </h1>
    </div>
  )
}
