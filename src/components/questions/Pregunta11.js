import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Radio, InputLabel, Input, FormLabel, Button } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta11 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const [marks, setMarks] = useState([]);
  const [tema, setTema] = useState([]);
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: '¿Te apuntarías a un curso de especialización?',
        response: response,
        user: user,
        tema: tema,
        marks: marks
      }
    );
    onSubmit();
  };

  const handleRadioChange = ev => {
    const value = ev.target.value;

    setResponse(value === 'true');
  };

  const handleTemaChange = ev => setTema(ev.target.value);

  const handleMarkChange = ev => {
    const value = ev.target.value;
    const name = ev.target.name;
    marks[name] = value;
    setMarks(marks);
    console.log('marks', marks);
  };

  return (
    <Styles>
      <h1>Pregunta 11</h1>
      <FormLabel>¿Te apuntarías a un curso de especialización?</FormLabel>
      <form>
        <InputLabel>
          <Radio value="true" checked={response} onChange={handleRadioChange} />
          Sí
        </InputLabel>
        <InputLabel>
          <Radio
            value="false"
            checked={!response}
            onChange={handleRadioChange}
          />
          No
        </InputLabel>
        {response &&
          [
            'Profundización en React + React native',
            'Server Side Rendering, Next js, Gatsby',
            'Progresive web apps',
            'Desktop applications',
            'Arquitectura Front-End  + otros frameworks, Angular, Vue.js..'
          ].map(topic => {
            return (
              <InputLabel key={topic}>
                <input
                  type="radio"
                  value={1}
                  name={topic}
                  onChange={handleMarkChange}
                />
                <input
                  type="radio"
                  value={2}
                  name={topic}
                  onChange={handleMarkChange}
                />
                <input
                  type="radio"
                  value={3}
                  name={topic}
                  onChange={handleMarkChange}
                />
                <input
                  type="radio"
                  value={4}
                  name={topic}
                  onChange={handleMarkChange}
                />
                <input
                  type="radio"
                  value={5}
                  name={topic}
                  onChange={handleMarkChange}
                />
                {topic}
              </InputLabel>
            );
          })}
        <FormLabel>Otro tema:</FormLabel>
        <Input type="text" name="tema" onChange={handleTemaChange}></Input>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta11;
