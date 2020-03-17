import React, { useState } from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="NotFoundPage" />
      <Card>
        <h2>
          Un consejo de osos evaluará detenidamente tus
          sugerencias. ¡Muchas gracias!
        </h2>
        <img
          src="https://media2.giphy.com/media/AgVa4rSV8cTBpdLYjs/giphy.gif?cid=790b76110fd40678e9e8a5291993b9dca8fc5ec46b39ba10&rid=giphy.gif"
          alt="OsoFeliz"
        />
      </Card>
    </Layout>
  );
};

const Card = styled.div`
  text-align: center;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 21px;
  display: grid;
  min-width: 265px;

  img {
    margin: 0 auto;
  }
`;

export default NotFoundPage;
