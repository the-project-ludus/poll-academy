import React, { useState, useContext } from "react"
import axios from "axios"
import UserContext from "../../context/UserContext"

const Pregunta1 = ({ onSubmit }) => {
  const [response1, setResponse1] = useState("")
  const { user } = useContext(UserContext)

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post(
      "https://the-project-ludus-poll.firebaseio.com/questions.json",
      {
        pregunta: "pregunta1",
        response1: response1,
        user: user,
      }
    )
    onSubmit()
  }

  const handleResponseChange = ev => setResponse1(ev.target.value)
  return (
    <div>
      <h1>Pregunta 1</h1>
      <p>¿Con que ejercicios sientes que has aprendido más?</p>
      <form className="test-form" name="pregunta1">
        <label>
          Respuesta:
          <textarea name="response1" onChange={handleResponseChange}></textarea>
        </label>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default Pregunta1
