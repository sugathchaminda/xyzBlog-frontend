import React from 'react';

interface LabelI {
  className?: string;
  style?: any;
  value: any;
}

const Label: React.FunctionComponent<LabelI> = ({
  className,
  style,
  value,
}) => (
  <div>
    <span className={className} style={style || {}}>
      {value}
    </span>
  </div>
);

export default Label;
