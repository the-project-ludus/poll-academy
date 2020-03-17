import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Styles from './Styles';

const Pregunta13 = ({ onSubmit }) => {
  const { user } = useContext(UserContext);

  const submit = async response => {
    await axios.post(
      'https://the-project-ludus-poll.firebaseio.com/questions.json',
      {
        pregunta:
          '¿Te gustaría que el curso incluyera dinámicas para trabajar en remoto que te orientara a ser un nómada digital?',
        response: response,
        user: user
      }
    );
    onSubmit();
  };
  const handleYes = () => submit('Yes');
  const handleNo = () => submit('No');
  return (
    <Styles>
      <h2>
        ¿Te gustaría que el curso incluyera dinámicas para trabajar en remoto
        que te orientara a ser un nómada digital?
      </h2>
      <div class="nomada-digital"></div>
      <div className="buttons">
        <Button variant="contained" color="primary" onClick={handleYes}>
          Si
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNo}>
          No
        </Button>
      </div>
    </Styles>
  );
};

export default Pregunta13;
