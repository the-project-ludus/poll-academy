import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Radio, InputLabel, Input, FormLabel, Button } from '@material-ui/core';
import styled from 'styled-components';

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
        marks: JSON.stringify(marks)
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
      <h2>¿Te apuntarías a un curso de especialización?</h2>
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
        {response && (
          <FormLabel style={{ marginTop: '30px' }}>
            <strong>
              Valora de 1 a 5 tu inseres, donde 1 no me interesa y 5 es me
              interesa mucho
            </strong>
          </FormLabel>
        )}
        {response &&
          [
            'Profundización en React + React native',
            'Server Side Rendering, Next js, Gatsby',
            'Progresive web apps',
            'Desktop applications',
            'Arquitectura Front-End  + otros frameworks, Angular, Vue.js..'
          ].map(topic => {
            return (
              <RadioGroup key={topic}>
                <InputLabel>{topic}</InputLabel>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '8px'
                  }}
                >
                  <TopicWrapper>
                    <Radio
                      size="small"
                      value={1}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '1'}
                    />
                    <InputLabel>1</InputLabel>
                  </TopicWrapper>
                  <TopicWrapper>
                    <Radio
                      size="small"
                      value={2}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '2'}
                    />
                    <InputLabel>2</InputLabel>
                  </TopicWrapper>
                  <TopicWrapper>
                    <Radio
                      size="small"
                      value={3}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '3'}
                    />
                    <InputLabel>3</InputLabel>
                  </TopicWrapper>
                  <TopicWrapper>
                    <Radio
                      size="small"
                      value={4}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '4'}
                    />
                    <InputLabel>4</InputLabel>
                  </TopicWrapper>
                  <TopicWrapper>
                    <Radio
                      size="small"
                      value={5}
                      onChange={handleMarkChange}
                      name={topic}
                      checked={marks[topic] === '5'}
                    />
                    <InputLabel>5</InputLabel>
                  </TopicWrapper>
                </div>
              </RadioGroup>
            );
          })}
        <FormLabel style={{ gridColumn: '1', padding: '16px 0' }}>
          Otro tema:
          <Input type="text" name="tema" onChange={handleTemaChange}></Input>
        </FormLabel>
        <Button
          style={{ gridColumn: '2', gridRow: '9' }}
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

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 span;
  margin-bottom: 21px;

  @media screen and (min-width: 800px) {
    & {
      flex-direction: row;
      margin-bottom: 0;
    }
  }
`;

const TopicWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3px;

  @media screen and (min-width: 800px) {
    & {
      margin-right: 8px;
    }
  }
`;

export default Pregunta11;
