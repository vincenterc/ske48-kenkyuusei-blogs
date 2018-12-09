import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar';
import Footer from './Footer'
import './Layout.css'

class Layout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header/>

        <div className='body'>
          <div className='sidebar'>
            <Sidebar />
          </div>

          <div className='content'>
          </div>
        </div>

        <Footer/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;

  & > .body {
    margin-bottom: 20px;
    display: flex;

    & > .sidebar {
      width: 25%;
      margin-right: 15px;
    }

    & > .content {
      width: 75%;
    }
  }

  @media screen and (max-width: 992px) {
    max-width: 750px;
  }
`

export default Layout