const path = require('path')
const generations = require('./content/generations')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  console.log('Creating home page...')
  createPage({
    path: '/',
    component: path.resolve('./src/templates/HomePage.js'),
    context: {},
  })

  console.log('Creating member and post pages...')
  generations.map(g => {
    g.members.map(m => {
      const postsPerPage = 15
      const numOfPages = Math.ceil(m.posts.length / postsPerPage)

      createPage({
        path: `/${m.identity}/`,
        component: path.resolve('./src/templates/MemberPage.js'),
        context: {
          memberId: m.identity,
          currentPage: 1,
          limit: postsPerPage,
          skip: 0,
        },
      })

      Array.from({ length: numOfPages }).forEach((_, i) => {
        createPage({
          path: `/${m.identity}/${i + 1}/`,
          component: path.resolve('./src/templates/MemberPage.js'),
          context: {
            memberId: m.identity,
            currentPage: i + 1,
            limit: postsPerPage,
            skip: i * postsPerPage,
          },
        })
      })

      m.posts.map(p => {
        createPage({
          path: `/${m.identity}/${p.identity}/`,
          component: path.resolve('./src/templates/PostPage.js'),
          context: { memberId: m.identity, postId: p.identity },
        })
      })
    })
  })
}
