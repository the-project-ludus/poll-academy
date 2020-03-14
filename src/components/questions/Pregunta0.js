import React, { useContext, useState } from "react"
import axios from "axios"
import UserContext from "../../context/UserContext"

const Pregunta0 = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const { user, setUser } = useContext(UserContext)

  const handleSubmit = async e => {
    e.preventDefault()
    setUser(email)
    console.log("user", user)
    await axios.post(
      "https://the-project-ludus-poll.firebaseio.com/questions.json",
      {
        pregunta: "pregunta0",
        nombre: nombre,
        email: email,
      }
    )
    onSubmit()
  }

  const handleNombreChange = ev => setNombre(ev.target.value)
  const handleEmailChange = ev => setEmail(ev.target.value)

  return (
    <div>
      <h1>Pregunta 0</h1>
      <p>¿Con que ejercicios sientes que has aprendido más?</p>
      <form className="test-form">
        <label>
          Nombre y apellidos:
          <input
            type="text"
            name="nombre"
            onChange={handleNombreChange}
          ></input>
        </label>
        <label>
          E-mail:
          <input type="text" name="email" onChange={handleEmailChange}></input>
        </label>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default Pregunta0
