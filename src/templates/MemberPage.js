import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PageWrapper from '../components/PageWrapper'
import NavButton from '../components/NavButton'

class MemberPage extends React.Component {
  render() {
    let {
      pageContext: { memberId },
      postList,
    } = this.props

    return (
      <Wrapper>
        <h3 className="title">MEMBER</h3>

        <div className="content">
          <div className="post-list">
            {postList.map(p => (
              <PostItem key={p.id} to={`/${memberId}/${p.id}`}>
                {p.title}
                <time>{p.date}</time>
              </PostItem>
            ))}
          </div>

          <div className="nav">
            <NavButton to="/">HOME</NavButton>
          </div>
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

    & > .post-list {
      margin-bottom: 15px;
    }

    & > .nav {
      text-align: center;
    }
  }
`

const PostItem = styled(Link)`
  display: block;
  border-bottom: dotted 1px #555;
  padding: 5px 10px;
  background: #ffeecc;
  color: #e57e16;
  font-size: 20px;
  text-decoration: none;

  &:nth-child(even) {
    background: #ffdd99;
  }

  & > time {
    display: block;
    color: #8d8d8d;
    font-size: 12px;
  }
`

export default PageWrapper(
  connect(
    (state, ownProps) => ({
      postList: state.posts[ownProps.pageContext.memberId].list,
    }),
    null
  )(MemberPage)
)
