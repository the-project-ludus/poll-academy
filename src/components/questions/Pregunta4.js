import React from 'react';
import { Button, Checkbox, FormLabel, InputLabel } from '@material-ui/core';

import Styles from './Styles';
import challengeList from '../../Lists/challengeList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta4 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    '¿Con que ejercicios sientes que has aprendido más?',
    onSubmit
  );

  return (
    <Styles>
      <h2>¿Con que ejercicios sientes que has aprendido más?</h2>
      <form className="test-form" name="pregunta4">
        <ul>
          {challengeList.map(topic => (
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
    </Styles>
  );
};

export default Pregunta4;
