import Button from '@material-ui/core/Button';
import React from 'react';

interface ButtonI {
  type?: any;
  label?: string;
  width?: any;
  height?: any;
  key?: string;
  disabled?: boolean;
  identifier?: string;
  style?: object;
  extrastyles?: object;
  variant?: 'text' | 'outlined' | 'contained';
  className?: any;
  onClick?: any;
  href?: string;
  endIcon?: React.ReactNode;
  color?: any;
}

const ButtonComponent: React.FunctionComponent<ButtonI> = (props) => {
  const { type, width, height, extrastyles, identifier, variant, onClick, disabled, className, href, endIcon, label, color } = props;

  return (
    <Button
      type={type}
      style={{
        width: width || '100px',
        height: height || '40px',
        ...extrastyles,
      }}
      id={identifier}
      variant={variant || 'contained'}
      onClick={onClick}
      {...props}
      disabled={disabled}
      className={className}
      disableElevation
      href={href}
      endIcon={endIcon}
      color={color}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
