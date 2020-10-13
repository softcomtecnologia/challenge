import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--orange);
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: var(--background);
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;