import * as _ from 'lodash';

import {
  Box, InputLabel, MenuItem, Select,
} from '@material-ui/core';

import React from 'react';
import customstyles from './styles.css';

interface SelectI {
  // tslint:disable-next-line: prefer-array-literal
  items: Array<SelectItemsI>;
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    identifier?: string,
  ) => void;
  value?: string;
  identifier?: string;
  error?: any;
  fieldLabel?: string;
  bottomMargin?: string;
  placeholder?: string;
  required?: boolean;
  isEditable?: boolean;
  width?: any;
  height?: any;
  extrastyles?: object;
}

const SelectComponent: React.FunctionComponent<SelectI> = (props) => {
  const { isEditable, fieldLabel, bottomMargin, required, width, height, extrastyles, value, identifier, error, placeholder, items } = props;

  const edit = isEditable === undefined ? true : isEditable;

  return (
    <Box className={`${customstyles}`}>
      <Box
        className="customSelectField"
        style={{ marginBottom: bottomMargin || '' }}
      >
        {fieldLabel ? (
          <InputLabel className="selectFieldLabel">
            {fieldLabel}
            {required && <span className="required">*</span>}
          </InputLabel>
        ) : (
          ''
        )}
        {edit ? (
          <Select
            style={{
              width: width || '270px',
              height: height || '46px',
              ...extrastyles,
            }}
            value={value}
            id={identifier}
            className={error ? 'selectField error' : 'selectField'}
            disableUnderline
            placeholder={placeholder}
            onChange={(event: React.ChangeEvent<any>) => props.onChange(event, props.identifier)}
          >
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
            {_.map(items, (item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <div className="selectFieldvalue">{value}</div>
        )}
      </Box>
    </Box>
  );
};

export default SelectComponent;
