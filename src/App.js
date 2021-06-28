import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }


  render() {
    let temp = null
    if (this.state.data) {
      temp = this.state.data.current.temperature
    }

    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                Sahil Samra
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/blogs">Blogs</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                Sahil Samra
              </Link>
            }
          >
            <Navigation>
              <Link to="/blogs">Blogs</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
             
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}
export default App
