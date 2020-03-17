import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import Styles from './Styles';
import { navigate } from 'gatsby';

const Pregunta9 = ({ onSubmit }) => {
  const handleNo = () => navigate('/adios/'); //Vamos a la pregunta 100 -- La de gracias por responder la encuesta

  return (
    <Styles>
      <h2>¿Has terminado la bootcamp?</h2>
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
