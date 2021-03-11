import React from 'react';
import styles from './Button.less';

const Button = (props) => {
  const { value } = props;
  return  (
    <div className={styles.container}>{value || '按钮'}</div>
  )
}

export default Button;