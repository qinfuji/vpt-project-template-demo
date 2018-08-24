import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import { Container, Title, Text, Buttons } from './elements';

function Alert({ title, body, onCancel, onDelete }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{body}</Text>
      <Buttons>
        <Button small block secondary onClick={onCancel}>
          Cancel
        </Button>
        <Button small block danger onClick={onDelete}>
          Delete
        </Button>
      </Buttons>
    </Container>
  );
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Alert;
