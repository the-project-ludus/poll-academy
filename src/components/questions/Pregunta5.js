import React, { useContext, useState } from 'react';
import axios from 'axios';
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
      <h1>Pregunta 5</h1>
      <p>¿Algun ejercicio te ha parecido demasiado difícil?</p>
      <label>
        <input
          type="radio"
          value="false"
          checked={!hardRadio}
          onChange={handleHardRadioChange}
        />
        No
      </label>
      <label>
        <input
          type="radio"
          value="true"
          checked={hardRadio}
          onChange={handleHardRadioChange}
        />
        Sí
      </label>
      {hardRadio && (
        <form className="test-form">
          <label>¿Cual?</label>
          <input type="text" onChange={handleWhatChange}></input>
          <label>¿Como lo mejorarías?</label>
          <textarea onChange={handleImprovementChange}></textarea>
          <button onClick={handleSubmit}>Send</button>
        </form>
      )}
    </Styles>
  );
};

export default Pregunta5;
