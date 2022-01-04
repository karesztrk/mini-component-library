import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Base = styled.div`
  padding: 12px 16px;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  border-color: transparent;
  outline-color: transparent;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray700};

  outline-width: 2px;
  outline-style: solid;

  ${NativeSelect}:focus + & {
    outline-color: revert;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
    outline-color: transparent;
  }

`;

const SelectValue = styled.span`
  vertical-align: middle;
`;

const Chevron = styled.div`
  display: inline-block;
  margin-left: 24px;
  vertical-align: middle;
  line-height: 1rem;

  & > div {
    display: inline-block;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  & > select {
    opacity: 0;
  }
`;


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <NativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Base>
        <SelectValue>{displayedValue}</SelectValue>
        <Chevron>
          <Icon id="chevron-down" />
        </Chevron>
      </Base>
    </Wrapper>
  );
};

export default Select;
