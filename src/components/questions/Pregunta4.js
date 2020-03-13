import React from "react"

const Pregunta4 = () => (
  <div>
    <h1>Pregunta 4</h1>
    <p>¿Con que ejercicios sientes que has aprendido más?</p>
    <form
      className="test-form"
      name="pregunta4"
      method="POST"
      data-netlify="true"
    >
      <label>
        Respuesta:<textarea name="pregunta4-response"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
)

export default Pregunta4
