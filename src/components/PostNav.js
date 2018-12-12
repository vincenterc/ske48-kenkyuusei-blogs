import React from 'react'
import styled from 'styled-components'
import NavButton from './NavButton'

class PostNav extends React.Component {
  render() {
    let { memberId, memberName, prevPostId, nextPostId } = this.props

    return (
      <Wrapper>
        <NavButton
          extracss={`visibility: ${prevPostId ? 'visible' : 'hidden'}`}
          to={`/${memberId}/${prevPostId}/`}
        >
          <span aria-label="BLACK LEFT-POINTING POINTER">&#9668;</span>
        </NavButton>

        <NavButton
          extracss="border-right: solid 1px #e57e16; border-left: solid 1px #e57e16;"
          to="/"
        >
          HOME
        </NavButton>

        <NavButton
          extracss="border-right: solid 1px #e57e16;"
          to={`/${memberId}/`}
        >
          {memberName}
        </NavButton>

        <NavButton
          extracss={`visibility: ${nextPostId ? 'visible' : 'hidden'}`}
          to={`/${memberId}/${nextPostId}/`}
        >
          <span aria-label="BLACK RIGHT-POINTING POINTER">&#9658;</span>
        </NavButton>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

export default PostNav
