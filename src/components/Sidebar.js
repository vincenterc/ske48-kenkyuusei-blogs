import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'

const generations = [
  {
    generation: 7,
    members: [
      {
        id: 'aikawa_honoka',
        jpnName: '相川暖花',
        engName: 'HONOKA AIKAWA',
      },
    ],
  },
  {
    generation: 8,
    members: [
      {
        id: 'atsumi_ayaha',
        jpnName: '渥美彩羽',
        engName: 'AYAHA ATSUMI',
      },
    ],
  },
]

class Sidebar extends React.Component {
  render() {
    return (
      <Wrapper>
        <h3 className='title'>Member List</h3>

        <div className='content'>
          {
            generations.map(g => (
              <Generation
                key={g.generation}
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

    & > div {
      margin-bottom: 10px;
    }

    & > div:last-child {
      margin-bottom: 0;
    }
  }
`

class Generation extends React.Component {
  render() {
    let { generation } = this.props;

    return (
      <Generation.Wrapper>
        <Generation.Title>{`${generation.generation}期生`}</Generation.Title>
        
        {
          generation.members.map(m => (
            <Generation.Member
              key={m.id}
              to={withPrefix(`/${m.id}`)}
            >
              {m.jpnName}
            </Generation.Member>
          ))
        }
      </Generation.Wrapper>
    )
  }

  static Wrapper = styled.div``

  static Title = styled.h4`
    color: #e57e16;
  `

  static Member = styled(Link)`
    color: #e57e16;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #f8b500;
      text-decoration: underline;
    }
  `
}

export default Sidebar