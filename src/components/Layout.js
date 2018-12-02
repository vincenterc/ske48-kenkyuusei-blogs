import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

class Layout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header/>

        <Footer/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;
  
  @media screen and (max-width: 992px) {
    max-width: 750px;
  }
`

export default Layout