import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';

const Variants = {
  small: {
    border: 1,
    font: 14,
    icon: 16,
    shift: 10,
    padding: 4,
  },
  large: {
    border: 2,
    font: 18,
    icon: 18,
    shift: 15,
    padding: 7,
  }
}

const NativeInput = styled.input`
  z-index: 1;
  display: inline;
  height: auto;
  width: ${props => props.width}px;

  border: none;
  border-radius: ${props => Variants[props.size].border}px;
  border-bottom: ${props => Variants[props.size].border}px solid ${COLORS.black};

  padding-left: calc(${props => Variants[props.size].icon}px + 0.25rem);
  padding-bottom: ${props => Variants[props.size].padding}px;
  padding-top: ${props => Variants[props.size].padding}px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: ${props => Variants[props.size].font / 16}rem;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    padding: 10px;
  }

  &:focus {
    outline-offset: 2px;
  }

  color: inherit;
`;

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: block;
  width: ${props => props.width}px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  
  & > div {
    position: absolute;
    inset: 0;
    margin: auto 0;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper width={width}>
      <IconWrapper size={size}>
        <Icon id={icon} size={Variants[size].icon} strokeWidth={size === 'large' ? 2 : 1} />
      </IconWrapper>
      <NativeInput aria-label={label} placeholder={placeholder} size={size} width={width} />
    </Wrapper>
  );
};

export default IconInput;
