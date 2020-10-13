import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c56060;
  `
}

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-around;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 18px;
    top: 10px;

    opacity: 0.8;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props => !props.hasDescription && css`
    svg {
      margin-top: 0;
    }
  `}
`;