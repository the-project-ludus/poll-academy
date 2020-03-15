import React from 'react';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta3 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'pregunta3',
    onSubmit
  );

  return (
    <div>
      <h1>Pregunta 3</h1>
      <p>Marca los temas donde has echado de menos más ejercicios.</p>
      <form className="test-form" name="pregunta3">
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

export default Pregunta3;
