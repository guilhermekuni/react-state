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