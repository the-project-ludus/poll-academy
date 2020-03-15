import React from 'react';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta2 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'pregunta2',
    onSubmit
  );

  return (
    <div>
      <h1>Pregunta 2</h1>
      <p>Marca los 5 temas sobre los que te gustaría seguir profundizando:</p>
      <form className="test-form" name="pregunta2">
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

export default Pregunta2;
