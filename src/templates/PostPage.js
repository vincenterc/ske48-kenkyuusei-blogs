import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import PageWrapper from '../components/PageWrapper'
import PostNav from '../components/PostNav'

class PostPage extends React.Component {
  render() {
    let {
      pageContext: { memberId },
      memberName,
      postTitle,
      postContent,
    } = this.props

    return (
      <Wrapper>
        <Helmet>
          <title>
            SKE48 BLOGS | {memberName} | {postTitle}
          </title>
        </Helmet>

        <h3 className="title">POST</h3>

        <div className="content">
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postContent }}
          />

          <PostNav
            memberId={memberId}
            memberName={memberName}
            prevPostId={this._getNextPrevPostId().prevPostId}
            nextPostId={this._getNextPrevPostId().nextPostId}
          />
        </div>
      </Wrapper>
    )
  }

  _getNextPrevPostId = () => {
    let {
      pageContext: { postId },
      postList,
    } = this.props
    let postIndex = postList.findIndex(p => p.id === postId)
    let prevPostId =
      postIndex !== -1 && postIndex !== 0 ? postList[postIndex - 1].id : ''
    let nextPostId =
      postIndex !== -1 && postIndex !== postList.length - 1
        ? postList[postIndex + 1].id
        : ''

    return { prevPostId, nextPostId }
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

    & > .post {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 1.5;

      & > h3 {
        color: #bc7c3c;
      }

      & > time {
        color: #8d8d8d;
        font-size: 12px;
      }

      & > .blogText {
        margin-top: 10px;
        border-top: dotted 1px #555;
        border-bottom: dotted 1px #555;
        padding: 25px 0 20px 0;

        & img {
          width: 100%;
        }
      }
    }
  }
`

export default PageWrapper(
  connect(
    (state, ownProps) => ({
      memberName: state.members[ownProps.pageContext.memberId].jpnName,
      postList: state.posts[ownProps.pageContext.memberId].list,
      postTitle:
        state.posts[ownProps.pageContext.memberId].map[
          ownProps.pageContext.postId
        ].title,
      postContent:
        state.posts[ownProps.pageContext.memberId].map[
          ownProps.pageContext.postId
        ].content,
    }),
    null
  )(PostPage)
)
