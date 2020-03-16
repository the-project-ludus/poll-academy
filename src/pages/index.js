import React, { useState } from 'react';
import 'typeface-roboto';

import useQuestions from '../hooks/useQuestions';
import UserContext from '../context/UserContext';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './index.css';

const IndexPage = () => {
  const [questionId, setQuestionId] = useState(8);
  const [user, setUser] = useState('');
  const questionComponents = useQuestions(() => setQuestionId(questionId + 1));

  return (
    <Layout>
      <SEO title="Home" />
      <UserContext.Provider value={{ user, setUser }}>
        {questionComponents[questionId]}
      </UserContext.Provider>
    </Layout>
  );
};

export default IndexPage;
