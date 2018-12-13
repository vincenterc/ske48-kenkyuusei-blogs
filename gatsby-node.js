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

      Array.from({ length: numOfPages }).forEach((_, i) => {
        if (i === 0) {
          createPage({
            path: `/${m.id}/`,
            component: path.resolve('./src/templates/MemberPage.js'),
            context: {
              memberId: m.id,
              currentPage: i + 1,
              limit: postsPerPage,
              skip: i * postsPerPage,
            },
          })
        }

        createPage({
          path: `/${m.id}/${i + 1}/`,
          component: path.resolve('./src/templates/MemberPage.js'),
          context: {
            memberId: m.id,
            currentPage: i + 1,
            limit: postsPerPage,
            skip: i * postsPerPage,
          },
        })
      })

      m.posts.map(p => {
        createPage({
          path: `/${m.id}/${p.id}/`,
          component: path.resolve('./src/templates/PostPage.js'),
          context: { memberId: m.id, postId: p.id },
        })
      })
    })
  })
}
