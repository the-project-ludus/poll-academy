import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Button, Checkbox } from '@material-ui/core';

import UserContext from '../../context/UserContext';
import topicList from '../topicList';
import Styles from './Styles';

const Pregunta1 = ({ onSubmit }) => {
  const [activeTopics, setActiveTopics] = useState({});
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: 'pregunta1',
        response1: activeTopics,
        user: user
      }
    );
    onSubmit();
  };

  const handleCheboxChange = ev => {
    const { name, checked } = ev.target;
    activeTopics[name] = checked;
    setActiveTopics(activeTopics);
  };
  return (
    <Styles>
      <h1>Pregunta 1</h1>
      <p>
        Marca los 5 temas a los que, desde tu punto de vista, crees que le ha
        faltado un poco más explicación:
      </p>
      <form className="test-form" name="pregunta1">
        <ul>
          {topicList.map(topic => (
            <li key={topic.id}>
              <Checkbox
                name={topic.description}
                onChange={handleCheboxChange}
              />
              {topic.description}
            </li>
          ))}
        </ul>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </Styles>
  );
};

export default Pregunta1;
