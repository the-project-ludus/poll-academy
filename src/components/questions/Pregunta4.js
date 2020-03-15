import React from 'react';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta4 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'pregunta4',
    onSubmit
  );

  return (
    <div>
      <h1>Pregunta 4</h1>
      <p>¿Con que ejercicios sientes que has aprendido más?</p>
      <form className="test-form" name="pregunta4">
        <ul>
          {topicList.map(topic => (
            <li key={topic.id}>
              <input
                type="checkbox"
                name={topic.description}
                onChange={handleCheboxChange}
              />
              {topic.description}
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Pregunta4;
