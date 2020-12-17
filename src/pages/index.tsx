import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div className="testme">
        THIS IS STYLED WITH MY OWN CLASS, THAT USES @APPLY from TAILWIN
    </div>
  </Layout>
)

export default IndexPage

