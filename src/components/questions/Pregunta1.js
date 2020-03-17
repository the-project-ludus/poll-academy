import React, { useState, useContext } from 'react';
import { Button, Checkbox, FormLabel, InputLabel } from '@material-ui/core';

import Styles from './Styles';
import topicList from '../../Lists/topicList';
import useCheckboxListQuestions from '../../hooks/useCheckboxListQuestions';

const Pregunta1 = ({ onSubmit }) => {
  const [handleSubmit, handleCheboxChange] = useCheckboxListQuestions(
    'Marca los 5 temas a los que, desde tu punto de vista, crees que le ha faltado un poco más explicación',
    onSubmit
  );

  return (
    <Styles>
      <h2>
        Marca los 5 temas a los que, desde tu punto de vista, crees que le ha
        faltado un poco más explicación:
      </h2>
      <form className="test-form" name="pregunta1">
        <ul>
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
    </Styles>
  );
};

export default Pregunta1;
