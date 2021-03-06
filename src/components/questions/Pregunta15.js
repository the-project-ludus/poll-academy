import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, Radio, Input, FormLabel, InputLabel } from '@material-ui/core';
import { navigate } from 'gatsby';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta15 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const [money, setMoney] = useState(3000);

  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta:
          '¿Queremos hacer un curso como el que has propuesto, lo contratarias por 3000€?',
        response: response,
        money: money,
        user: user
      }
    );
    navigate('/adios/');
  };

  const handleMoneyChange = ev => setMoney(ev.target.value);
  const handleRadioChange = ev => {
    const value = ev.target.value;

    setResponse(value === 'true');
  };

  return (
    <Styles>
      <h2>
        ¿Queremos hacer un curso como el que has propuesto, lo contratarias por
        3000€?
      </h2>
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
            <InputLabel>¿Y por cuanto lo contratarías?</InputLabel>
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

export default Pregunta15;
