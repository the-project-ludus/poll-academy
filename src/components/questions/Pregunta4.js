import React from 'react';
import { Button, Checkbox } from '@material-ui/core';

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
      <h1>Pregunta 4</h1>
      <p>¿Con que ejercicios sientes que has aprendido más?</p>
      <form className="test-form" name="pregunta4">
        <ul>
          {challengeList.map(topic => (
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

export default Pregunta4;
