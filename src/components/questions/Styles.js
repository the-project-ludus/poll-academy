import styled from 'styled-components';

const Styles = styled.div`
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 21px;
  display: grid;

  form {
    display: grid;
    grid-template-columns: 10em auto;
    grid-gap: 1em;
    margin: 0;
  }

  button {
    width: 100%;
    max-width: 158px;
    justify-self: flex-end;
    grid-column: 2/3;
  }
`;

export default Styles;
