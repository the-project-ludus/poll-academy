import React from 'react';
import Pregunta0 from '../components/questions/Pregunta0';
import Pregunta1 from '../components/questions/Pregunta1';
import Pregunta2 from '../components/questions/Pregunta2';
import Pregunta3 from '../components/questions/Pregunta3';
import Pregunta4 from '../components/questions/Pregunta4';
import Pregunta5 from '../components/questions/Pregunta5';
import Pregunta6 from '../components/questions/Pregunta6';
import Pregunta7 from '../components/questions/Pregunta7';
import Pregunta8 from '../components/questions/Pregunta8';

const questions = [
  <Pregunta0 />,
  <Pregunta1 />,
  <Pregunta2 />,
  <Pregunta3 />,
  <Pregunta4 />,
  <Pregunta5 />,
  <Pregunta6 />,
  <Pregunta7 />,
  <Pregunta8 />
];

const useQuestions = onSubmit =>
  questions.map(question =>
    React.cloneElement(question, { onSubmit: onSubmit })
  );

export default useQuestions;
