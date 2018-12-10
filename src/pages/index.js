import React from "react"
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'
import PageWrapper from '../components/PageWrapper'

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

class HomePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <h3 className='title'>Home</h3>

        <div className='content'>
          {
            generations.map(g => (
              <Generation
                key={g.generation}
                css='margin-bottom: 10px; &:last-child { margin-bottom: 0; }'
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
    padding: 10px 30px 15px;
    background: #fff9ed;
  }
`

class Generation extends React.Component {
  render() {
    let {css, generation} = this.props;

    return (
      <Generation.Wrapper css={css}>
        <Generation.Title>{`${generation.generation}期生`}</Generation.Title>

        {
          generation.members.map(m => (
            <Generation.Member
              key={m.id}
              to={withPrefix(`/${m.id}`)}
            >
              {m.jpnName}
              <span>{m.engName}</span> 
            </Generation.Member>
          ))
        }
      </Generation.Wrapper>
    )
  }

  static Wrapper = styled.div`
    ${props => props.css}
  `

  static Title = styled.h3`
    padding: 5px 10px;
    background: #ffc05d;
  `

  static Member = styled(Link)`
    display: block;
    border-bottom: 1px dotted #555;
    padding: 8px 10px;
    color: #e57e16;
    font-size: 18px;
    text-decoration: none;

    & > span {
      margin-left: 5px;
      color: #8d8d8d;
      font-size: 14px;
    }
  `
}

export default PageWrapper(HomePage)
