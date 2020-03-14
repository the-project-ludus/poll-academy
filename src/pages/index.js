import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useQuestions from '../hooks/useQuestions';
import UserContext from '../context/UserContext';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './index.css';

const IndexPage = () => {
  const [questionId, setQuestionId] = useState(1);
  const [user, setUser] = useState('');
  const questionComponents = useQuestions(() => setQuestionId(questionId + 1));

  const llamada = () =>
    axios.post('https://the-project-ludus-poll.firebaseio.com/questions.json', {
      nombre: 'antonio'
    });

  return (
    <Layout>
      <SEO title="Home" />
      <UserContext.Provider value={{ user, setUser }}>
        {questionComponents[questionId]}
      </UserContext.Provider>
      <button onClick={llamada}>Llamada</button>
    </Layout>
  );
};

export default IndexPage;
