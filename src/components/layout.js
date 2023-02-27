import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
    const data = useStaticQuery(query)

    const { title } = data?.site?.siteMetadata ?? {}

    return (
        <>
            <header>
                <Link to="/">{title}</Link>
            </header>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <main>{children}</main>
        </>
    )
    
}

export default Layout

const query = graphql`
  query GetSiteTitle {
    site(siteMetadata: {}) {
      siteMetadata {
        title
      }
    }
  }
`