const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  console.log('Creating home page...')
  createPage({
    path: '/',
    component: path.resolve('./src/templates/HomePage.js'),
    context: {},
  })

  console.log('Creating member page...')
  createPage({
    path: '/aikawa_honoka/',
    component: path.resolve('./src/templates/MemberPage.js'),
    context: {},
  })

  console.log('Creating post page...')
  createPage({
    path: '/aikawa_honoka/20171003060201364/',
    component: path.resolve('./src/templates/PostPage.js'),
    context: {},
  })
}