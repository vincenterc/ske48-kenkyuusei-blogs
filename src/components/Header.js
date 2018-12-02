import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="logo">
          <img src="http://stage48.net/wiki/images/6/6a/SKELogo.png" alt="the SKE48 logo" />
        </div>

        <div className="header">
          <h1 className="title">
            <Link to={withPrefix('/')}>SKE48 Kenkyuusei Blogs</Link>
          </h1>
          <p className="description">
            All blogs collected form <a href="http://www.ske48.co.jp/" target="_blank">the official website</a>
          </p>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  margin-bottom: 20px;
  display: flex;
  
  & > .logo {
    width: 25%;
    height: 144px;
    margin-right: 15px;
    background: #fff9ed;
    
    & > img {
      height: inherit;
    }
  }
  
  & > .header {
    width: 75%;
    padding: 15px;
    background: #f8b500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & > .title {
      margin-bottom: 5px;
      font-size: 60px;
      font-weight: normal;
      
      & > a {
        color: #fff;
        text-decoration: none;
      }
    }
    
    & > .description {
      font-size: 20px;
      
      & > a {
        color: #666;
        font-weight: bold;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    & > .logo {
      display: none;
    }
  }
`

export default Header
