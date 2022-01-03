/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const WIDTH = 370;

const variants = {
  small: {
    padding: 0,
    height: 8,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 24,
    padding: 4,
  }
}

const Wrapper = styled.div`
  width: ${WIDTH}px;
  height: ${(props => variants[props.size].height)}px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: ${(props => variants[props.size].padding)}px;
`;

const Fill = styled.div`
  height: 100%;
  width: ${(props => Number.parseFloat((props.value / 100) * (WIDTH - (2 * variants[props.size].padding))).toFixed(2))}px;
  background: ${COLORS.primary};
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  const progress = Math.min(Math.max(0, value), 100);
  return (
    <Wrapper role="progressbar" size={size} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <Fill value={progress} size={size} />
    </Wrapper>
  );
};

export default ProgressBar;
