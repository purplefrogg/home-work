import { Button, Layout } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Covid from './features/Covid/Covid'
import CurrencyExchange from './features/CurrencyExchange/CurrencyExchange'
import DevTeam from './features/DevTeam/DevTeam'
import Homepage from './features/Homepage/Homepage'
import Navbar from './features/Navbar/Navbar'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import MoviePage from './features/Movie/MoviePage copy'
import MoviesByGenre from './features/Movie/MoviesByGenre'
import Movie from './features/Movie/Movie'

const { Content, Footer, Sider } = Layout

function App() {
  const [collapsedSider, setCollapsedSider] = useState()
  return (
    <Layout>
      <Header>
        <Button onClick={() => setCollapsedSider(!collapsedSider)}>
          {collapsedSider ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Header>
      <Layout hasSider>
        <Sider
          trigger={null}
          collapsed={collapsedSider}
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            setCollapsedSider(broken)
          }}
          onCollapse={(collapsed) => {
            setCollapsedSider(collapsed)
          }}
        >
          <Navbar />
        </Sider>
        <Content style={{ margin: '24px 16px 0' }}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/DevTeam' element={<DevTeam />} />
            <Route path='/COVID' element={<Covid />} />
            <Route path='/CurrencyExchange' element={<CurrencyExchange />} />
            <Route path='/Movie' element={<MoviePage />}>
              <Route path=':GenreName' element={<MoviesByGenre />} />
            </Route>
            <Route path='MoviesId'>
              <Route path=':id' element={<Movie />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Created by students of K.ZHUBANOV AKTOBE REGIONAL UNIVERSITY
      </Footer>
    </Layout>
  )
}

export default App
