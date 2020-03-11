import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Pregunta 4</h1>
    <p>¿Con que ejercicios sientes que has aprendido más?</p>
    <form
      name="pregunta4"
      method="post"
      data-netlify="true"
      data-netlyfy-honeypot="bot-field"
    >
      <textarea
        name="pregunta4-respuesta"
        id="pregunta4-respuesta"
        cols="60"
        rows="5"
      ></textarea>
      <button>Send</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
