// @flow
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { SIZES } from '../BreakPoints';
import { gray800 } from '../Colors';
import {
  body1,
  body2,
  caption1,
  caption2,
  display2,
  display3,
  headline1,
  headline2,
  headline3,
  subtitle1,
  tiny1,
} from '../TextStyles';

export type Typo = keyof typeof TypographyList;

interface Props {
  lg?: Typo;
  md: Typo;
  sm?: Typo;
  children?: JSX.Element | string;
  display?: 1 | 2 | 3;
}

interface State {
  width: number;
}

interface CommonTypoProps {
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  textAlign?: string;
  display?: string | number;
}

const customStyle = css<CommonTypoProps>`
  color: ${props => props.color || gray800};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
`;

const Headline1 = styled.h1<CommonTypoProps>`
  ${headline1};
  ${props =>
    props.display &&
    [2, '2'].includes(props.display) &&
    css`
      ${display2};
    `};
  ${props =>
    props.display &&
    [3, '3'].includes(props.display) &&
    css`
      ${display3};
    `};
  ${customStyle};
`;

const Headline2 = styled.h2<CommonTypoProps>`
  ${headline2};
  color: ${props => props.color || gray800};
  ${props =>
    props.display &&
    [2, '2'].includes(props.display) &&
    css`
      ${display2};
    `};
  ${props =>
    props.display &&
    [3, '3'].includes(props.display) &&
    css`
      ${display3};
    `};
  ${customStyle};
`;

const Headline3 = styled.h3<CommonTypoProps>`
  ${headline3};
  color: ${props => props.color || gray800};
  ${props =>
    props.display &&
    [2, '2'].includes(props.display) &&
    css`
      ${display2};
    `};
  ${props =>
    props.display &&
    [3, '3'].includes(props.display) &&
    css`
      ${display3};
    `};
  ${customStyle};
`;

const Subtitle1 = styled.h4<CommonTypoProps>`
  ${subtitle1};
  ${customStyle};
`;

const Body1 = styled.div<CommonTypoProps>`
  ${body1};
  line-height: 24px;
  ${customStyle};
`;

const Body1Paragraph = styled.p<CommonTypoProps>`
  ${body1};
  line-height: 28px;
  ${customStyle};
`;

const Body2 = styled.div<CommonTypoProps>`
  ${body2};
  line-height: 20px;
  ${customStyle};
`;

const Body2Paragraph = styled.div<CommonTypoProps>`
  ${body2};
  line-height: 24px;
  ${customStyle};
`;

const Caption1 = styled.div<CommonTypoProps>`
  ${caption1};
  ${customStyle};
`;

const Caption2 = styled.div<CommonTypoProps>`
  ${caption2};
  ${customStyle};
`;

const Tiny1 = styled.div<CommonTypoProps>`
  ${tiny1};
  ${customStyle};
`;

const getCurrentSize = (currentWidth: number) => {
  let windowSize = 'md';

  if (!currentWidth) {
    return windowSize;
  }

  Object.keys(SIZES).forEach(key => {
    const size = SIZES[key as keyof typeof SIZES];
    const conditions = Object.keys(size).map(sizeOption => {
      const BreakPoint = size[sizeOption as keyof typeof size];
      if (BreakPoint && sizeOption === 'minWidth') {
        return currentWidth >= BreakPoint;
      }
      if (BreakPoint && sizeOption === 'maxWidth') {
        return currentWidth <= BreakPoint;
      }
      return 'SKIP';
    });
    if (!conditions.includes(false) && conditions.join() !== 'SKIP,SKIP') {
      windowSize = key;
    }
    return windowSize;
  });

  return windowSize;
};

const capitalize = (str?: string) => (str ? str[0].toUpperCase() + str.slice(1) : null) as keyof typeof TypographyList;

const throttle = (callback: any, limit: number) => {
  let wait = false;
  return () => {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};

const TypographyList = {
  Headline1,
  Headline2,
  Headline3,
  Subtitle1,
  Body1,
  Body1Paragraph,
  Body2,
  Body2Paragraph,
  Caption1,
  Caption2,
  Tiny1,
};

export default class Typography extends React.PureComponent<Props, State> {
  public readonly state = {
    width: 0,
  };

  public updateWindowDimensions = throttle(() => {
    this.setState({ width: window.innerWidth });
  }, 60);

  public componentDidMount() {
    const { lg, md, sm } = this.props;
    if ([lg, md, sm].filter(Boolean).length >= 2) {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  public componentWillUnmount() {
    const { lg, md, sm } = this.props;
    if ([lg, md, sm].filter(Boolean).length >= 2) {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }

  public render() {
    const { width } = this.state;
    const { children, ...restProps } = this.props;

    const lg = capitalize(this.props.lg);
    const md = capitalize(this.props.md);
    const sm = capitalize(this.props.sm);

    let Element = null;
    if (!lg && md && !sm) {
      Element = TypographyList[md];
      return <Element {...restProps}>{children}</Element>;
    }

    const currentSize = getCurrentSize(width);
    if (lg && currentSize === 'lg') {
      Element = TypographyList[lg || md];
    } else if (md && currentSize === 'md') {
      Element = TypographyList[md];
    } else if (sm && currentSize === 'sm') {
      Element = TypographyList[sm || md];
    } else {
      Element = TypographyList[md || 'Body1'];
    }

    return <Element {...restProps}>{children}</Element>;
  }
}