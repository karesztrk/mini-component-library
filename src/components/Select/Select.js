import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Base = styled.div`
  display: inline-block;
  
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

  &:focus {
    outline-color: revert;
  }

  &:hover {
    color: ${COLORS.black};
    outline-color: transparent;
  }

  & ~ select {
    display: none;
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

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <>
      <Base role="listbox" aria-label={label}>
        <SelectValue>{displayedValue}</SelectValue>
        <Chevron>
          <Icon id="chevron-down" />
        </Chevron>
      </Base>
      <select aria-hidden value={value} onChange={onChange}>
        {children}
      </select>
    </>
  );
};

export default Select;
