import { Menu } from 'antd'
import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (<Menu theme="dark" mode="inline">
    <Menu.Item key="1">
      <Link to='/'>Home</Link>
    </Menu.Item>
    <Menu.Item key="2" >
    <Link to='/COVID'>COVID</Link>
    </Menu.Item>
    <Menu.Item key="3" >
    <Link to='/DevTeam'>Dev Team</Link>
    </Menu.Item>
    <Menu.Item key="4" >
    <Link to='/CurrencyExchange'>Exchange</Link>
    </Menu.Item>
    <Menu.Item key="5" >
    <Link to='/Movie'>Movie</Link>
    </Menu.Item>
  </Menu>
  )
}

export default Navbar