import React, { useState } from 'react';
import 'typeface-roboto';

import useQuestions from '../hooks/useQuestions';
import UserContext from '../context/UserContext';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MobileStepper } from '@material-ui/core';

import './index.css';

const IndexPage = () => {
  const [questionId, setQuestionId] = useState(0);
  const [user, setUser] = useState('');
  const questionComponents = useQuestions(() => setQuestionId(questionId + 1));

  return (
    <Layout>
      <SEO title="Home" />
      <UserContext.Provider value={{ user, setUser }}>
        <MobileStepper
          variant="dots"
          steps={questionComponents.length}
          position="static"
          activeStep={questionId}
        />
        {questionComponents[questionId]}
      </UserContext.Provider>
    </Layout>
  );
};

export default IndexPage;
