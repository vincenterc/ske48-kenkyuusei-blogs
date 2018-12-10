import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'
import PageWrapper from '../components/PageWrapper'

const postList = [
  {
    memberId: 'aikawa_honoka',
    postId: '20171003060201364',
    postTitle: 'ほのののぶろぐ(*^^*)♪たこやきとアイス',
    postDate: '2017.10.03 06:12',
  },
  {
    memberId: 'aikawa_honoka',
    postId: '20170927184122396',
    postTitle: 'ほのののブログ(*^^*)♪ ',
    postDate: '2017.09.27 18:51',
  },
]

class MemberPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <h3 className='title'>MEMBER</h3>

        <div className='content'>
          <div className='post-list'>
            {
              postList.map(p => (
                <PostItem
                  key={p.postId}
                  to={withPrefix(`/${p.memberId}/${p.postId}`)}
                >
                  {p.postTitle}
                  <time>{p.postDate}</time>
                </PostItem>
              ))
            }
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

export default PageWrapper(MemberPage)