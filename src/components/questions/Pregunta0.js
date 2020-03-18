import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, FormLabel, Input } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta0 = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setUser(email);
      console.log('user', user);
      await axios.post(
        'https://the-project-ludus-poll.firebaseio.com/questions.json',
        {
          pregunta: 'Datos usuario',
          nombre: nombre,
          email: email
        }
      );
      onSubmit();
    } else {
      setError(true);
    }
  };

  const handleNombreChange = ev => setNombre(ev.target.value);
  const handleEmailChange = ev => {
    setError(false);
    setEmail(ev.target.value);
  };

  return (
    <Styles>
      <form className="test-form">
        <FormLabel>Nombre y apellidos:</FormLabel>
        <Input type="text" name="nombre" onChange={handleNombreChange}></Input>
        <FormLabel>
          <strong style={{ color: error ? 'red' : 'inherit' }}>E-mail*:</strong>
        </FormLabel>
        <Input type="email" onChange={handleEmailChange}></Input>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta0;
