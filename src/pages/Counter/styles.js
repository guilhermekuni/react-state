import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 400px;
  width: 400px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  width: 40vw;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 20px;
    }
  }
`;

export const StateCounter = styled.button`
  background: #5F5AA2;
`;

export const VariableCounter = styled.button`
  background: #355691;
`;
