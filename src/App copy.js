import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Covid from './features/Covid/Covid';
import CurrencyExchange from './features/CurrencyExchange/CurrencyExchange';
import DevTeam from './features/DevTeam/DevTeam';
import Homepage from './features/Homepage/Homepage';
import Navbar from './features/Navbar/Navbar';
const { Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout hasSider>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
    <Navbar /> 
    </Sider>
    <Layout className="site-layout">
   
      <Content style={{ margin: '24px 16px 0' }}>
      <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/DevTeam' element={<DevTeam />} />
          <Route exact path='/COVID' element={<Covid />} />
          <Route exact path='/CurrencyExchange' element={<CurrencyExchange />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created by students of K.ZHUBANOV AKTOBE REGIONAL UNIVERSITY</Footer>
    </Layout>
  </Layout>
  );
}

export default App;
