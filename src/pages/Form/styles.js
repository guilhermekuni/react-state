import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 1200px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    border: 2px solid #fff;
    height: 75px;
    width: 300px;
    margin-bottom: 120px;
    font-size: 20px;

    transition: border 0.35s;

    &:hover {
      border: 8px solid #fff;
    }

    &:active {
      border: 12px solid #fff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #7E7F9A;
  height: 600px;
  width: 80%;
`;