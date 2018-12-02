import React from 'react'
import styled from 'styled-components'

class Footer extends React.Component {
  render() {
    return (
      <Wrapper />
    );
  }
}

const Wrapper = styled.footer`
  margin-top: 20px;
  padding: 5px;
  background-color: #f8b500;
  color: #fff;
  text-align: center;
`;

export default Footer;