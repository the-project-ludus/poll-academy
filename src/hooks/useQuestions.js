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
import Pregunta9 from '../components/questions/Pregunta9';
import Pregunta10 from '../components/questions/Pregunta10';
import Pregunta11 from '../components/questions/Pregunta11';
import Pregunta12 from '../components/questions/Pregunta12';

const questions = [
  <Pregunta0 />,
  <Pregunta1 />,
  <Pregunta2 />,
  <Pregunta3 />,
  <Pregunta4 />,
  <Pregunta5 />,
  <Pregunta6 />,
  <Pregunta7 />,
  <Pregunta8 />,
  <Pregunta9 />,
  <Pregunta10 />,
  <Pregunta11 />,
  <Pregunta12 />
];

const useQuestions = onSubmit =>
  questions.map(question =>
    React.cloneElement(question, { onSubmit: onSubmit })
  );

export default useQuestions;
