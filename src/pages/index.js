import React, { useState } from 'react';
import 'typeface-roboto';

import useQuestions from '../hooks/useQuestions';
import UserContext from '../context/UserContext';
import QuestionContext from '../context/QuestionContext';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './index.css';

const IndexPage = () => {
  const [questionId, setQuestionId] = useState(6);
  const [user, setUser] = useState('');
  const questionComponents = useQuestions(() => setQuestionId(questionId + 1));

  return (
    <Layout>
      <SEO title="Home" />
      <QuestionContext.Provider value={{ questionId, setQuestionId }}>
        <UserContext.Provider value={{ user, setUser }}>
          {questionComponents[questionId]}
        </UserContext.Provider>
      </QuestionContext.Provider>
    </Layout>
  );
};

export default IndexPage;
