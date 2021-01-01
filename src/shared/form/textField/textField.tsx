import { Box, Input, InputLabel } from '@material-ui/core';

import React from 'react';
import multilineCustomstyles from 'shared/form/textField/multilineTextFieldStyles.css';
import customstyles from 'shared/form/textField/styles.css';

interface TextFieldI {
  identifier: string;
  type: string;
  onChange: any;
  className?: string;
  disabled?: boolean;
  error?: any;
  value: any;
  fieldLabel?: string;
  bottomMargin?: string;
  validation?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  optional?: boolean;
  autoFocus?: boolean;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  isValid?: boolean;
  isEditable?: boolean;
  multiline?: boolean;
  style?: any;
}

const TextField: React.FunctionComponent<TextFieldI> = ({
  identifier,
  type,
  error,
  disabled,
  onChange,
  value,
  autoFocus,
  onKeyPress,
  fieldLabel,
  placeholder,
  required,
  isValid,
  bottomMargin,
  isEditable,
  maxLength,
  multiline,
  style,
}) => {
  const edit = isEditable === undefined ? true : isEditable;
  return (
    <Box className={`${multiline ? multilineCustomstyles : customstyles}`}>
      <Box
        className={multiline ? 'multilineTextField' : 'customTextField'}
        style={{ marginBottom: bottomMargin || '' }}
      >
        {fieldLabel ? (
          <InputLabel className="inputFieldLabel">
            {fieldLabel}
            {required && <span className="required">*</span>}
          </InputLabel>
        ) : (
          <InputLabel
            style={{ visibility: 'hidden' }}
            className="inputFieldLabel"
          >
            none
            {required && <span className="required">*</span>}
          </InputLabel>
        )}
        {edit ? (
          <Input
            name={identifier}
            type={type}
            value={value}
            disableUnderline
            onChange={onChange}
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
            inputProps={{ maxLength }}
            placeholder={placeholder}
            error={error}
            autoFocus={autoFocus}
            onKeyPress={
              onKeyPress
                ? (event: any) => {
                  onKeyPress(event);
                }
                : () => {}
            }
            multiline={multiline}
            rows={multiline ? 5 : 0}
            style={style || {}}
          />
        ) : (
          <div className="inputFieldValue">{value}</div>
        )}
      </Box>
    </Box>
  );
};

export default TextField;
