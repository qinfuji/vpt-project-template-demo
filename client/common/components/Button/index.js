import * as React from 'react';
import PropTypes from 'prop-types';
import { LinkButton, AButton, Button } from './elements';

function ButtonComponent({ small = false, style = {}, ...props }) {
  const newStyle = {
    ...style,
    ...(small
      ? {
          padding: '0.5em 0.7em',
          fontSize: '0.875em',
        }
      : {
          padding: '0.65em 2.25em',
        }),
  };

  ButtonComponent.propTypes = {
    small: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.any,
  };

  // Link
  if (props.to) {
    return <LinkButton style={newStyle} {...props} />;
  }

  if (props.href) {
    return <AButton style={newStyle} {...props} />;
  }

  return <Button style={newStyle} {...props} />;
}

export default ButtonComponent;
