import React from "react"

const Pregunta0 = () => (
  <div>
    <h1>Pregunta 0</h1>
    <p>¿Con que ejercicios sientes que has aprendido más?</p>
    <form
      className="test-form"
      name="pregunta0"
      method="POST"
      data-netlify="true"
    >
      <label>
        Nombre y apellidos:<input text name="pregunta0-nombre"></input>
      </label>
      <label>
        E-mail:<input text name="pregunta0-email"></input>
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
)

export default Pregunta0
