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
      createPage({
        path: `/${m.id}/`,
        component: path.resolve('./src/templates/MemberPage.js'),
        context: { memberId: m.id },
      })

      m.posts.map(p => {
        createPage({
          path: `/${m.id}/${p.id}/`,
          component: path.resolve('./src/templates/PostPage.js'),
          context: { memberId: m.id, postId: p.id, postContent: p.content },
        })
      })
    })
  })
}