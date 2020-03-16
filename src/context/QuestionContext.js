import React from 'react';

const QuestionContext = React.createContext({
  questionId: 0,
  setQuestionId: () => {}
});

export default QuestionContext;
