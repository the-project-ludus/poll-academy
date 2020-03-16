import styled from 'styled-components';

const Styles = styled.div`
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 21px;
  display: grid;
  min-width: 265px;

  form.test-form {
    display: grid;
    grid-template-columns: 10em auto;
    grid-gap: 1em;
    margin: 0;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(1, auto);
      grid-gap: 1em;
    }
    button {
      width: 100%;
      max-width: 158px;
      justify-self: flex-end;
      grid-column: 2/3;
    }
  }

  @media screen and (min-width: 370px) {
    ul {
      grid-template-columns: repeat(2, auto);
    }
  }

  @media screen and (min-width: 500px) {
    ul {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media screen and (min-width: 700px) {
    ul {
      grid-template-columns: repeat(4, auto);
    }
  }
  @media screen and (min-width: 800px) {
    ul {
      grid-template-columns: repeat(5, auto);
    }
  }

  li {
    display: flex;
    align-items: center;
  }
`;

export default Styles;
