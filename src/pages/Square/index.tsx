import styles from './index.less';
import React from 'react';
interface IProps {
  handleClick: (data: number) => void;
  value: string;
  index: number;
}

export default ({ handleClick, value, index }: IProps) => {
  return (
    <button
      className={styles.square}
      onClick={() => { handleClick(index) }}
    >
      {value}
    </button>
  )
}
