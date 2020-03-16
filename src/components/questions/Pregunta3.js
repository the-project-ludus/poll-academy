import React from 'react';
import { Button, Checkbox } from '@material-ui/core';

import Styles from './Styles';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta3 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'Marca los temas donde has echado de menos más ejercicios',
    onSubmit
  );

  return (
    <Styles>
      <h1>Pregunta 3</h1>
      <p>Marca los temas donde has echado de menos más ejercicios.</p>
      <form className="test-form" name="pregunta3">
        <ul>
          {topicList.map(topic => (
            <li key={topic.id}>
              <Checkbox
                name={topic.description}
                onChange={handleCheboxChange}
              />
              {topic.description}
            </li>
          ))}
        </ul>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta3;
