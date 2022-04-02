import { Typography } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const DevTeam = () => {
  const devteam = useSelector((state) => state.DevTeam.Devteam)

  return (
    <>
      <Typography.Title level={1} style={{textAlign: 'center'}}> OUR TEAM</Typography.Title>
      <div className='DevteamGrid'>
        {devteam.map((item) => <Developer dev={item} key={item.id}/>)}
      </div>
    </>

  )
}

export default DevTeam

const Developer = ({ dev }) => {
  const [active, setActive] = useState(false)
  return <div className='DevteamGrid_item'>
    <Typography.Title>{dev.name}</Typography.Title>
    {active ? <div className='discription' onClick={() => setActive(!active)}  >{dev.description}</div> :
      <img className='avatar' onClick={() => setActive(!active)} src={dev.avatar} alt='avatar' />}

  </div>
}