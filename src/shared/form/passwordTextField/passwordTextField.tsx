import {
  Box, Input, InputAdornment, InputLabel,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import customstyles from 'shared/form/passwordTextField/styles.css';

interface TextBoxI {
  identifier: string;
  type: string;
  onChange: any;
  className?: string;
  extrastyles?: object;
  disabled?: boolean;
  error?: any;
  value: any;
  validation?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  optional?: boolean;
  handleClickShowPassword?: () => void;
  handleMouseDownPassword?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  showPassword?: boolean;
  fieldLabel?: string;
  isValid?: boolean;
  required?: boolean;
  placeholder?: string;
  isEditable?: boolean;
}

const TextBox: React.FunctionComponent<TextBoxI> = ({
  identifier,
  type,
  error,
  disabled,
  onChange,
  value,
  handleClickShowPassword,
  handleMouseDownPassword,
  showPassword,
  fieldLabel,
  isValid,
  placeholder,
  required,
  isEditable,
  extrastyles,
  maxLength,
}) => {
  const edit = isEditable === undefined ? true : isEditable;
  return (
    <div style={extrastyles}>
      <Box className={`${customstyles} customTextField`}>
        {fieldLabel ? (
          <InputLabel className="inputFieldLabel">
            {fieldLabel}
            {required && <span className="required">*</span>}
          </InputLabel>
        ) : (
          ''
        )}
        {edit ? (
          <Input
            name={identifier}
            type={type}
            value={value}
            disableUnderline
            placeholder={placeholder}
            onChange={onChange}
            inputProps={{ maxLength }}
            className={
              // eslint-disable-next-line no-nested-ternary
              isValid
                ? 'inputField valid'
                // eslint-disable-next-line no-nested-ternary
                : isValid === undefined
                  ? error
                    ? 'inputField error'
                    : 'inputField'
                  : 'inputField error'
            }
            disabled={disabled}
            error={error}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  className="eye"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
          />
        ) : (
          <div className="inputFieldValue">{value}</div>
        )}
      </Box>
    </div>
  );
};

export default TextBox;
