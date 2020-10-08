import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
const ListLink = props => (
  <li className={'inline-block mr-4'}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={'container mx-auto'}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 className={'inline'}> {data.site.siteMetadata.title}</h3>
        </Link>
        <ul className={'list-none float-right'}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}