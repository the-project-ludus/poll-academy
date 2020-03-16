import React from 'react';
import { Button, Checkbox } from '@material-ui/core';

import Styles from './Styles';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta2 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'pregunta2',
    onSubmit
  );

  return (
    <Styles>
      <h1>Pregunta 2</h1>
      <p>Marca los 5 temas sobre los que te gustaría seguir profundizando:</p>
      <form className="test-form" name="pregunta2">
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

export default Pregunta2;
