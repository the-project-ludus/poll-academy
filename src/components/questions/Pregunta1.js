import React from "react"

const Pregunta1 = () => (
  <div>
    <h1>Pregunta 1</h1>
    <p>¿Con que ejercicios sientes que has aprendido más?</p>
    <form
      className="test-form"
      name="pregunta1"
      method="POST"
      data-netlify="true"
    >
      <label>
        Respuesta:<textarea name="pregunta1-response"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
)

export default Pregunta1
