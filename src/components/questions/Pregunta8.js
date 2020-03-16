import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, Radio, Input, FormLabel, InputLabel } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta8 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const [money, setMoney] = useState(450);

  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: '¿Cuanto pagarías por acceder a esas sesiones online?',
        response: response,
        money: money,
        user: user
      }
    );
    onSubmit();
  };

  const handleMoneyChange = ev => setMoney(ev.target.value);
  const handleRadioChange = ev => {
    const value = ev.target.value;

    setResponse(value === 'true');
  };

  return (
    <Styles>
      <h1>Pregunta 8</h1>
      <FormLabel>
        ¿Considerías apuntarte a estas sesiones por un precio de 450€?
      </FormLabel>
      <form className="test-form">
        <InputLabel>
          <Radio
            value="false"
            checked={!response}
            onChange={handleRadioChange}
          />
          Sí
        </InputLabel>
        <InputLabel>
          <Radio value="true" checked={response} onChange={handleRadioChange} />
          No
        </InputLabel>
        {response && (
          <>
            <InputLabel>¿Y cuanto pagarías?</InputLabel>
            <Input
              type="text"
              onChange={handleMoneyChange}
              placeholder={`${money}€`}
            ></Input>
          </>
        )}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta8;
