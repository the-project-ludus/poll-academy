import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, TextareaAutosize, FormLabel } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta12 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta:
          '¿Cómo crees que se podría mejorar la dinámica durante el curso?',
        response: response,
        user: user
      }
    );
    onSubmit();
  };
  const handleResponseChange = ev => setResponse(ev.target.value);

  return (
    <Styles>
      <h2>¿Cómo crees que se podría mejorar la dinámica durante el curso?</h2>
      <form className="textarea-form">
        <TextareaAutosize
          rows={8}
          onChange={handleResponseChange}
        ></TextareaAutosize>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta12;
