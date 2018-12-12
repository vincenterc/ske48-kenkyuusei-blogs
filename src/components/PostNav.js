import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

class PostNav extends React.Component {
  render() {
    let { memberId, memberName } = this.props

    return (
      <Wrapper>
        <NavButton to="/">HOME</NavButton>
        <NavButton to={`/${memberId}/`}>{memberName}</NavButton>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const NavButton = styled(Link)`
  border-right: solid 1px #e57e16;
  padding: 0 15px;
  color: #e57e16;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: #f8b500;
    text-decoration: underline;
  }
`

export default PostNav
