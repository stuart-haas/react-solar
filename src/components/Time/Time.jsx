import React, { useEffect, useState } from 'react';
import styles from './Time.module.scss';

const Time = (props) => {

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.module}>
      {time}
    </div>
  )
}

const getTime = () => {
  const date = new Date();
  const seconds = addLeadingZero(date.getSeconds());
  const minutes = addLeadingZero(date.getMinutes());
  const hour = addLeadingZero(date.getHours());
  return `${hour}:${minutes}:${seconds}`;
}

const addLeadingZero = (value) => {
  return value < 10 ? `0${value}` : value;
}

export default Time;