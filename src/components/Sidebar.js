import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'gatsby'
import * as Icons from './Icons'

class Sidebar extends React.Component {
  render() {
    let { generations } = this.props

    return (
      <Wrapper>
        <h3 className="title">Member List</h3>

        <div className="content">
          {generations.map(g => (
            <Generation
              key={g.identity}
              extraCss="margin-bottom: 10px; &:last-child { margin-bottom: 0; }"
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
    padding: 10px 15px 10px 0;
    background: #fff9ed;
  }
`

class Generation extends React.Component {
  constructor(props) {
    super(props)
    let { generation } = props

    this.state = {
      expanded: generation.identity === '9',
    }
  }

  render() {
    let { extraCss, generation } = this.props
    let { expanded } = this.state

    return (
      <Generation.Wrapper extraCss={extraCss}>
        <Generation.Header>
          <Generation.Expander
            onClick={() => this.setState({ expanded: !expanded })}
          >
            {expanded ? (
              <Icons.Minus size="14px" />
            ) : (
              <Icons.Plus size="14px" />
            )}
          </Generation.Expander>
          <Generation.Title>{`${generation.title.toUpperCase()}`}</Generation.Title>
        </Generation.Header>

        {expanded
          ? generation.members.map(m => (
              <Generation.Member key={m.identity} to={`/${m.identity}`}>
                {m.name}
                {/*`(${m.posts.length})`*/}
              </Generation.Member>
            ))
          : ''}
      </Generation.Wrapper>
    )
  }

  static Wrapper = styled.div`
    ${props => props.extraCss}
  `

  static Header = styled.div`
    display: flex;
    align-items: center;
  `

  static Expander = styled.div`
    color: #e57e16;
    cursor: pointer;
  `

  static Title = styled.h4`
    color: #e57e16;
  `

  static Member = styled(Link)`
    padding-left: 16px;
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
