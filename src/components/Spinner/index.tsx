import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray200, gray400 } from '../../core/Colors';

export interface SpinnerProps {
  size: number;
  color: string;
  backgroundColor: string;
}

export class Spinner extends PureComponent<SpinnerProps> {
  public static defaultProps: Partial<SpinnerProps> = {
    color: gray400,
    size: 64,
    backgroundColor: gray200,
  };

  public render() {
    return (
      <PureCssContainer {...this.props}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </PureCssContainer>
    );
  }
}

const PureCssContainer = styled.div<SpinnerProps>`
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  display: inline-block;
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => `${size - 13}px`};
    height: ${({ size }) => `${size - 13}px`};
    border: 6px solid ${({ color }) => color};
    margin: 6px;
    border-radius: 50%;
  }
  div:not(:first-child) {
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => color} transparent transparent transparent;
  }
  div:first-child {
    border-color: ${({ backgroundColor }) => backgroundColor};
  }
  div:nth-child(2) {
    animation-delay: -0.6s;
  }
  div:nth-child(3) {
    animation-delay: -0.45s;
  }
  div:nth-child(4) {
    animation-delay: -0.3s;
  }
  div:nth-child(5) {
    animation-delay: -0.15s;
  }
`;
