import React from 'react'
import { connect }from 'react-redux'
import styled from 'styled-components'
import { Link } from 'gatsby'

class Sidebar extends React.Component {
  render() {
    let { generations } = this.props;

    return (
      <Wrapper>
        <h3 className='title'>Member List</h3>

        <div className='content'>
          {
            generations.map(g => (
              <Generation
                key={g.generation}
                extraCss='margin-bottom: 10px; &:last-child { margin-bottom: 0; }'
                generation={g}
              />   
            ))
          }
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  & > .title {
    padding: 10px 15px;
    background: #f8b500;
  }

  & > .content {
    padding: 10px 15px;
    background: #fff9ed;
  }
`

class Generation extends React.Component {
  render() {
    let { extraCss, generation } = this.props;

    return (
      <Generation.Wrapper extraCss={extraCss}>
        <Generation.Title>{`${generation.generation}期生`}</Generation.Title>
        
        {
          generation.members.map(m => (
            <Generation.Member
              key={m.id}
              to={`/${m.id}`}
            >
              {m.jpnName}
            </Generation.Member>
          ))
        }
      </Generation.Wrapper>
    )
  }

  static Wrapper = styled.div`
    ${props => props.extraCss}
  `

  static Title = styled.h4`
    color: #e57e16;
  `

  static Member = styled(Link)`
    display: block;
    color: #e57e16;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;

    &:hover {
      color: #f8b500;
      text-decoration: underline;
    }
  `
}

export default connect(
  state => ({ generations: state.generations }),
  null
)(Sidebar)