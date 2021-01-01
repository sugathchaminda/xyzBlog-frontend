import { Checkbox, FormControlLabel } from '@material-ui/core';

import React from 'react';

interface CheckboxI {
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    identifier?: string,
  ) => void;
  label: string | JSX.Element;
  identifier?: string;
  style?: any;
  disabled?: boolean;
}

const CheckboxComponent: React.FunctionComponent<CheckboxI> = (props) => {
  const { checked, identifier, disabled, label, style } = props;

  return (
    <FormControlLabel
      control={(
        <Checkbox
          color="primary"
          checked={checked}
          id={identifier}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event, props.identifier)}
          disabled={disabled}
        />
        )}
      label={label}
      style={style || {}}
      disabled={disabled}
    />
  );
};

export default CheckboxComponent;
