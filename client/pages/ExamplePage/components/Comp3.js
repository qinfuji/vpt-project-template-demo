import * as React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.scss';

export default function Comp3({ title }) {
  console.log('component3 render');
  return (
    <button type="button" className={styles.root}>
      {title}
    </button>
  );
}

Comp3.propTypes = {
  title: PropTypes.string.isRequired,
};
