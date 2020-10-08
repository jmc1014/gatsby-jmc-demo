import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby" />

        <Header headerText="Pretty Cool" />
        <p>Such wow. Very React.</p>
    </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`