import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  img {
    width: 400px;
  }

  a {
    margin: 0 auto;
    margin-top: 20px;

    border: 2px solid black;
    color: #556b2f;

    padding: 5px;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  color: #556b2f;

  font-size: 60px;

  span {
    color: black;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  width: 400px;

  color: black;

  input {
    border: 2px solid;
    margin-top: 2px;

    padding: 5px;
  }

  button {
    margin: 0 auto;
    margin-top: 20px;

    border: 2px solid black;
    color: #556b2f;

    width: 100px;
  }
`;

export const ListSelecao = styled.div`
  width: 400px;
  margin-top: 10px;

  ul li {
    display: flex;
    flex-direction: column;

    padding: 20px;

    background-color: #d1e0b8;

    margin-top: 10px;
  }

  input {
    width: 320px;
  }

  a {
    background: #556B2F;
    text-decoration: none;
    margin-top: 7px;

    width: 60px;
    padding: 5px;
  }

  div {
    button {
      margin-top: 10px;
      font-size: 13px;

      padding: 6px;

      font-weight: bold;
      background-color: #a6a6a6;

      border: 0;
      width: 70px;

      & + button {
        margin-left: 10px;
      }
    }

    a {
      margin-left: 10px;
      font-size: 13px;

      padding: 6px;

      font-weight: bold;
      background-color: #a6a6a6;

      border: 0;
      width: 70px;

      color: black;
      text-decoration: none;

      & + button {
      margin-left: 10px;
    }
  }
`;
