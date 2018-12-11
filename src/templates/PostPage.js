import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../components/PageWrapper'

class PostPage extends React.Component {
  render() {
    let { pageContext: { postContent } } = this.props;

    return (
      <Wrapper>
        <h3 className='title'>POST</h3>

        <div className='content'>
          <div className="post" dangerouslySetInnerHTML={{ __html: postContent }} />
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

export default PageWrapper(PostPage)