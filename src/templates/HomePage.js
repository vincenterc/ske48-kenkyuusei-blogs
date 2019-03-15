import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PageWrapper from '../components/PageWrapper'

class HomePage extends React.Component {
  render() {
    let { generations } = this.props

    return (
      <Wrapper>
        <h3 className="title">HOME</h3>

        <div className="content">
          {generations.map(g => (
            <Generation
              key={g.identity}
              extraCss="margin-bottom: 10px; &:last-child { margin-bottom: 0 }"
              generation={g}
            />
          ))}
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
    let { extraCss, generation } = this.props

    return (
      <Generation.Wrapper extraCss={extraCss}>
        <Generation.Title>{`${generation.title.toUpperCase()}`}</Generation.Title>

        {generation.members.map(m => (
          <Generation.Member key={m.identity} to={`/${m.identity}`}>
            {m.name}
            <span>{m.name_eng.toUpperCase()}</span>
          </Generation.Member>
        ))}
      </Generation.Wrapper>
    )
  }

  static Wrapper = styled.div`
    ${props => props.extraCss}
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

export default PageWrapper(
  connect(
    state => ({ generations: state.generations }),
    null
  )(HomePage)
)
