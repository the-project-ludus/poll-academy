import React from 'react';
import Pregunta0 from '../components/questions/Pregunta0';
import Pregunta1 from '../components/questions/Pregunta1';
import Pregunta2 from '../components/questions/Pregunta2';
import Pregunta3 from '../components/questions/Pregunta3';
import Pregunta4 from '../components/questions/Pregunta4';
import Pregunta5 from '../components/questions/Pregunta5';

const questions = [
  <Pregunta0 />,
  <Pregunta1 />,
  <Pregunta2 />,
  <Pregunta3 />,
  <Pregunta4 />,
  <Pregunta5 />
];

const useQuestions = onSubmit =>
  questions.map(question =>
    React.cloneElement(question, { onSubmit: onSubmit })
  );

export default useQuestions;
