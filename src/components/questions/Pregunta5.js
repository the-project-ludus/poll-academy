import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Radio,
  Input,
  TextareaAutosize,
  InputLabel,
  FormLabel
} from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta5 = ({ onSubmit }) => {
  const [what, setWhat] = useState('');
  const [improvement, setImprovement] = useState('');
  const [hardRadio, setHardRadio] = useState(false);
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('user', user);
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: '¿Algun ejercicio te ha parecido demasiado difícil?',
        what: what,
        improvement: improvement,
        user: user
      }
    );
    onSubmit();
  };

  const handleWhatChange = ev => setWhat(ev.target.value);
  const handleImprovementChange = ev => setImprovement(ev.target.value);
  const handleHardRadioChange = ev => {
    const value = ev.target.value;

    setHardRadio(value === 'true');
  };

  return (
    <Styles>
      <h2>¿Algun ejercicio te ha parecido demasiado difícil?</h2>
      <form className="test-form">
        <InputLabel>
          <Radio
            value="false"
            checked={!hardRadio}
            onChange={handleHardRadioChange}
          />
          No
        </InputLabel>
        <InputLabel>
          <Radio
            value="true"
            checked={hardRadio}
            onChange={handleHardRadioChange}
          />
          Sí
        </InputLabel>
        {hardRadio && (
          <>
            <InputLabel>¿Cual?</InputLabel>
            <Input type="text" onChange={handleWhatChange}></Input>
            <InputLabel>¿Como lo mejorarías?</InputLabel>
            <TextareaAutosize
              onChange={handleImprovementChange}
            ></TextareaAutosize>
          </>
        )}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta5;
