import { FormControlLabel, Radio } from '@material-ui/core';
import React from 'react';

interface RadiobuttonI {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    identifier?: string,
  ) => void;
  label: string | JSX.Element;
  identifier?: string;
  style?: any;
  disabled?: boolean;
  value?: any;
  checkedIcon?: any;
  icon?: any;
  color?: any;
}

const RadioButtonComponent: React.FunctionComponent<RadiobuttonI> = (props) => {
  const { color, icon, checkedIcon, value, label, style, disabled } = props;

  return (
    <FormControlLabel
      control={(
        <Radio
          disableRipple
          color={color || 'default'}
          icon={icon || ''}
          checkedIcon={checkedIcon || ''}
        />
        )}
      onChange={(event: React.ChangeEvent<any>) => props.onChange(event, props.identifier)}
      value={value}
      label={label || ''}
      style={style || {}}
      disabled={disabled}
    />
  );
};

export default RadioButtonComponent;
