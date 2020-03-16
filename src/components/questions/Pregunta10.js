import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, TextareaAutosize, FormLabel } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta10 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: '¿Por donde crees que debería seguir tu formación?',
        response: response,
        user: user
      }
    );
    onSubmit();
  };
  const handleResponseChange = ev => setResponse(ev.target.value);

  return (
    <Styles>
      <h1>Pregunta 10</h1>
      <FormLabel>¿Por donde crees que debería seguir tu formación?</FormLabel>
      <form className="test-form">
        <TextareaAutosize onChange={handleResponseChange}></TextareaAutosize>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta10;
