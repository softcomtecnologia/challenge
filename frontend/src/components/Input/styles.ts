import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--inputs);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: var(--gray-hard);
  border: 2px solid var(--inputs);

  display: flex;
  align-items: center;

  ${(props) => 
    props.isErrored && 
    css`
      border-color: var(--error);
  `}

  ${(props) => 
    props.isFocused && 
    css`
      color: var(--orange);
      border-color: var(--orange);
  `}

  ${(props) => 
    props.isFilled && 
    css`
      color: var(--orange);
  `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: var(--white);

    &::placeholder {
      color: var(--gray-hard);
    }
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg: {
    margin: 0;
  }

  span {
    background: var(--error);
    color: var(--white);

    &::before {
      border-color: var(--error) transparent;
    }
  }
`;