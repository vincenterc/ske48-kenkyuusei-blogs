import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './Layout.css'
import favicon from '../../images/favicon.ico'
import global_bg from '../../images/global_bg.jpg'

class Layout extends React.Component {
  render() {
    let { children } = this.props

    return (
      <Wrapper>
        <Container>
          <Helmet>
            <title>SKE48 KENKYUUSEI BLOGS</title>
            <meta name="description" content="SKE48 Kenkyuusei Blogs" />
            <link rel="icon" href={favicon} />
          </Helmet>

          <Header />

          <div className="body">
            <div className="sidebar">
              <Sidebar />
            </div>

            <div className="content">{children}</div>
          </div>

          <Footer />
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background: url(${global_bg});
`

const Container = styled.div`
  max-width: 970px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > .body {
    flex-grow: 1;
    margin: 20px 0;
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
