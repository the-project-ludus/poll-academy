import React from 'react';
import { Button, Checkbox, FormLabel, InputLabel } from '@material-ui/core';

import Styles from './Styles';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const topicList = [
  { id: 1, description: 'Full Time Presencial' },
  { id: 2, description: 'Part Time Presencial' },
  { id: 3, description: 'Flexible Online' }
];

const Pregunta14 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    '¿Como te gustaría que fueran esas sesiones?',
    onSubmit
  );

  return (
    <Styles>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Pregunta 14</h1>
        <FormLabel>¿Cómo preferirías que fuera el curso?</FormLabel>
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

export default Pregunta14;
