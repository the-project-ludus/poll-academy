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
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label style="font-family: monospace;">Name<br /><input style="width: 100%;" type="text" name="name" /></label>   
      </p>
      <p>
        <label style="font-family: monospace;">Email<br /><input style="width: 100%;" type="email" name="email" /></label>
      </p>
      <p>
        <label style="font-family: monospace;">Message<br /><textarea style="width: 100%;" rows="15" name="message"></textarea></label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <br />
      <p>
        <button class="send-button" type="submit">Send</button>
      </p>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
