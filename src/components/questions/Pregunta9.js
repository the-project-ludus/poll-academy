import React, { useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import { Button } from '@material-ui/core';
import Styles from './Styles';

const Pregunta9 = ({ onSubmit }) => {
  const { questionId, setQuestionId } = useContext(QuestionContext);

  const handleNo = () => setQuestionId(100); //Vamos a la pregunta 100 -- La de gracias por responder la encuesta

  return (
    <Styles>
      <h1>¿Has terminado la bootcamp?</h1>
      <div className="buttons">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Si
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNo}>
          No
        </Button>
      </div>
    </Styles>
  );
};

export default Pregunta9;
