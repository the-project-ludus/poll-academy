import React from 'react';
import { Button, Checkbox, FormLabel, InputLabel } from '@material-ui/core';

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>¿Como te gustaría que fueran esas sesiones?</h2>
        <form className="no-grid">
          <ul style={{ listStyle: 'none' }}>
            {topicList.map(topic => (
              <li key={topic.id}>
                <Checkbox
                  name={topic.description}
                  onChange={handleCheboxChange}
                />
                <InputLabel>{topic.description}</InputLabel>
              </li>
            ))}
          </ul>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Siguiente
          </Button>
        </form>
      </div>
    </Styles>
  );
};

export default Pregunta7;
