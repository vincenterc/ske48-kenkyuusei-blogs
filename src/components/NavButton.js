import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavButton = ({ extracss, to, children }) => (
  <Wrapper extracss={extracss} to={to}>
    {children}
  </Wrapper>
)

const Wrapper = styled(Link)`
  padding: 0 15px;
  color: #e57e16;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;

  &:hover {
    color: #f8b500;
    text-decoration: underline;
  }

  ${props => props.extracss}
`

export default NavButton
