import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { Button } from '@material-ui/core';
import Styles from './Styles';

const Pregunta6 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta:
          '¿Crees que aprenderías mas o aprovecharías mas el curso, haciendo sesiones online durante la semana para reforzar ampliar temas?',
        response: response,
        user: user
      }
    );
    onSubmit();
  };

  const handleRadioChange = ev => {
    const value = ev.target.value;

    setResponse(value === 'true');
  };

  return (
    <Styles>
      <h1>Pregunta 6</h1>
      <p>
        ¿Crees que aprenderías mas o aprovecharías mas el curso, haciendo
        sesiones online durante la semana para reforzar ampliar temas?
      </p>
      <form>
        <label>
          <input
            type="radio"
            value="false"
            checked={!response}
            onChange={handleRadioChange}
          />
          No
        </label>
        <label>
          <input
            type="radio"
            value="true"
            checked={response}
            onChange={handleRadioChange}
          />
          Sí
        </label>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta6;
