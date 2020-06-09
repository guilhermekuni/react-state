import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
`;

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 300px;
  border: 2px solid #fff;
  font-size: 20px;
  margin-bottom: 20px;

  transition: border 0.35s;

  &:hover {
    border: 8px solid #fff;
  }

  &:active {
    border: 12px solid #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
