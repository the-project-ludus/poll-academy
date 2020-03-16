import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, FormLabel, Input } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta0 = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setUser(email);
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: '¿Con que ejercicios sientes que has aprendido más?',
        nombre: nombre,
        email: email
      }
    );
    onSubmit();
  };

  const handleNombreChange = ev => setNombre(ev.target.value);
  const handleEmailChange = ev => setEmail(ev.target.value);

  return (
    <Styles>
      <h1>Pregunta 0</h1>
      <p>¿Con que ejercicios sientes que has aprendido más?</p>
      <form className="test-form">
        <FormLabel>Nombre y apellidos:</FormLabel>
        <Input type="text" name="nombre" onChange={handleNombreChange}></Input>
        <FormLabel>E-mail:</FormLabel>
        <Input type="text" name="email" onChange={handleEmailChange}></Input>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta0;
