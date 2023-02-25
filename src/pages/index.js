import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data?.site?.siteMetadata ?? {}

  return (
    <>
      <header>
        <Link to="/">{title}</Link>
      </header>
      <main>
        <h1>Welcome to Frontend Masters!</h1>
        <Link to="/about">About this site</Link>

      </main>
    </>
  )
}

export default IndexPage