import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Radio, InputLabel, Input, FormLabel, Button } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import Styles from './Styles';

const Pregunta11 = ({ onSubmit }) => {
  const [response, setResponse] = useState('');
  const [marks, setMarks] = useState({});
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
    const theObject = {};
    Object.assign(theObject, marks);
    theObject[name] = value;
    setMarks(theObject);
  };

  return (
    <Styles>
      <h1>Pregunta 11</h1>
      <FormLabel>¿Te apuntarías a un curso de especialización?</FormLabel>
      <form style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gridColumn: '2 span'
                }}
                key={topic}
              >
                <InputLabel>{topic}</InputLabel>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '16px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '8px'
                    }}
                  >
                    <Radio
                      size="small"
                      value={1}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '1'}
                    />
                    <InputLabel>1</InputLabel>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '8px'
                    }}
                  >
                    <Radio
                      size="small"
                      value={2}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '2'}
                    />
                    <InputLabel>2</InputLabel>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '8px'
                    }}
                  >
                    <Radio
                      size="small"
                      value={3}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '3'}
                    />
                    <InputLabel>3</InputLabel>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '8px'
                    }}
                  >
                    <Radio
                      size="small"
                      value={4}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '4'}
                    />
                    <InputLabel>4</InputLabel>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '8px'
                    }}
                  >
                    <Radio
                      size="small"
                      value={5}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '5'}
                    />
                    <InputLabel>5</InputLabel>
                  </div>
                </div>
              </div>
            );
          })}
        <FormLabel style={{ gridColumn: '1', padding: '16px 0' }}>
          Otro tema:
          <Input type="text" name="tema" onChange={handleTemaChange}></Input>
        </FormLabel>
        <Button
          style={{ gridColumn: '2', gridRow: '8' }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Siguiente
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta11;
