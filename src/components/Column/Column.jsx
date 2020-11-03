import React from 'react';
import classnames from 'classnames';
import styles from './Column.module.scss';

const Column = (props) => {
  return (
    <div className={classnames(styles[props.type], styles[props.width])}>
      {props.children}
    </div>
  )
}

export default Column;