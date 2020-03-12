import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Pregunta 4</h1>
    <p>¿Con que ejercicios sientes que has aprendido más?</p>
    <form
      className="test-form"
      name="pregunta4"
      method="POST"
      data-netlify="true"
    >
      <textarea name="message"></textarea>
      <button type="submit">Send</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
