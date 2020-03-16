import React, { useState, useContext } from 'react';
import { Button, Checkbox } from '@material-ui/core';

import Styles from './Styles';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const topicList = [
  { id: 1, description: 'Teóricas' },
  { id: 2, description: 'Ejercicios' },
  { id: 3, description: 'Ejercicios para resolver en grupo' },
  { id: 4, description: 'Con mentoring para apoyar el aprendizaje' }
];

const Pregunta7 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    '¿Como te gustaría que fueran esas sesiones?',
    onSubmit
  );

  return (
    <Styles>
      <h1>Pregunta 7</h1>
      <p>¿Como te gustaría que fueran esas sesiones?</p>
      <form>
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

export default Pregunta7;
