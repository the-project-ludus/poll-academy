import React, { useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import { Button } from '@material-ui/core';
import Styles from './Styles';

const Pregunta9 = () => {
  const { questionId, setQuestionId } = useContext(QuestionContext);

  const handleYes = () => setQuestionId(questionId + 1); //Vamos a la siguiente pregunta -- Las de si has hecho el curso
  const handleNo = () => setQuestionId(100); //Vamos a la pregunta 100 -- La de gracias por responder la encuesta

  return (
    <Styles>
      <h1>¿Has terminado la bootcamp?</h1>
      <Button variant="contained" color="primary" onClick={handleYes}>
        Si
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNo}>
        No
      </Button>
    </Styles>
  );
};

export default Pregunta9;
