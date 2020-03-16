import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { Button } from '@material-ui/core';
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
      <p>¿Considerías apuntarte a estas sesiones por un precio de 450€?</p>
      <label>
        <input
          type="radio"
          value="false"
          checked={!response}
          onChange={handleRadioChange}
        />
        Sí
      </label>
      <label>
        <input
          type="radio"
          value="true"
          checked={response}
          onChange={handleRadioChange}
        />
        No
      </label>
      {response && (
        <form className="test-form">
          <label>¿Y cuanto pagarías?</label>
          <input type="text" onChange={handleMoneyChange} value={money}></input>
          €
        </form>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Send
      </Button>
    </Styles>
  );
};

export default Pregunta8;
