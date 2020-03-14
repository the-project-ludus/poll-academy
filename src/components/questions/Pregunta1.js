import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import topicList from '../topicList';

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
    <div>
      <h1>Pregunta 1</h1>
      <p>
        Marca los 5 temas a los que, desde tu punto de vista, crees que le ha
        faltado un poco más explicación:
      </p>
      <form className="test-form" name="pregunta1">
        <ul>
          {topicList.map(topic => (
            <li key={topic.id}>
              <input
                type="checkbox"
                name={topic.description}
                onChange={handleCheboxChange}
              />
              {topic.description}
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Pregunta1;
