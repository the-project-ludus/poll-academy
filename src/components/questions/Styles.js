import styled from 'styled-components';

const Styles = styled.div`
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 21px;
  display: grid;
  min-width: 265px;

  button {
    width: 100%;
  }

  @media screen and (min-width: 450px) {
    button {
      max-width: 250px;
    }
  }

  form.test-form {
    display: grid;
    grid-template-columns: 10em auto;
    grid-gap: 1em;
    margin: 2em 0;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(1, auto);
      grid-gap: 1em;
    }

    @media screen and (min-width: 380px) {
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

    button {
      width: 100%;
      justify-self: flex-end;
      grid-column: 1/3;
    }

    @media screen and (min-width: 450px) {
      button {
        max-width: 250px;
      }
    }
  }

  form.no-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      width: 100%;
      justify-self: flex-end;
      grid-column: 1/3;
    }

    @media screen and (min-width: 450px) {
      button {
        max-width: 250px;
      }
    }

    ul {
      margin-top: 1em;

      li {
        display: flex;
        align-items: center;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    max-width: 300px;

    button {
      max-width: 120px;
    }

    button:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
      @keyframes shake {
        10%,
        90% {
          transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
          transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
          transform: translate3d(4px, 0, 0);
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    .buttons {
      max-width: 400px;

      button {
        max-width: 150px;
      }
    }
  }
  @media screen and (min-width: 600px) {
    .buttons {
      max-width: none;
    }
  }

  .textarea-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > * {
      margin: 1em 0 0 0;
    }
  }
`;

export default Styles;
