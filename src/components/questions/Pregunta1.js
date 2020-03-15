import React from 'react';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta1 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'pregunta1',
    onSubmit
  );

  return (
    <div>
      <h1>Pregunta 1</h1>
      <p>
        Marca los 5 temas a los que, desde tu punto de vista, crees que le ha
        faltado un poco más explicación:
      </p>
      <form className="test-form" name="pregunta1">
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

export default Pregunta1;
