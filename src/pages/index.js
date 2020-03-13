import React, { useState } from "react"
import axios from "axios"
import { Link } from "gatsby"

import useQuestions from "../hooks/useQuestions"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => {
  const [questionId, setQuestionId] = useState(0)
  const questionComponents = useQuestions()

  const llamada = () =>
    axios.post("https://the-project-ludus-poll.firebaseio.com/questions.json", {
      nombre: "antonio",
    })

  return (
    <Layout>
      <SEO title="Home" />
      {questionComponents[questionId]}
      <button onClick={llamada}>Llamada</button>
    </Layout>
  )
}

export default IndexPage
