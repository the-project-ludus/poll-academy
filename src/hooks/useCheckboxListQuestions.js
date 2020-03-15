import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';

function useCheckboxListQuestions(pregunta, onSubmit) {
  const [activeTopics, setActiveTopics] = useState({});
  const { user } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta: pregunta,
        response: activeTopics,
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

  return [handleSubmit, handleCheboxChange];
}

export default useCheckboxListQuestions;
