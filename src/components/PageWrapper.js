import React from 'react'
import Layout from './Layout'

const PageWrapper = (Comp) => {
  class Wrapper extends React.Component {
    render() {
      return (
        <Layout>
          <Comp/>
        </Layout>
      )
    }
  }

  Wrapper.displayName = `Wrapper-of-${Comp.displayName || Comp.name}`

  return Wrapper
}

export default PageWrapper