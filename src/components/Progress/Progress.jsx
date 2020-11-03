import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './Progress.module.scss';

const Progress = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calcProgress = Math.round(((props.value - props.min) / (props.max - props.min)) * 100);
    setProgress(calcProgress);
  }, [props]);

  useEffect(() => {
    if(props.interval) {
      const interval = setInterval(() => {
        if(progress < 100) {
          setProgress(progress => progress + 1);
        }
      }, props.interval);
      return () => clearInterval(interval);
    }
  }, [progress, props]);

  return (
    <div className={styles.module}>
      <div className={styles.label}>
        {props.label}
      </div>
      <div className={styles.progress}>
        <div className={classnames(styles.value, 'min')}>{props.min}</div>
        <div className={styles.background}>
          <div className={styles.indicator} style={{ width: `${progress}%` }}>
            <div className={classnames(styles.value, styles.current)}>{progress}/{props.value}</div>
          </div>
        </div>
        <div className={classnames(styles.value, 'max')}>{props.max}</div>
      </div>
    </div>
  );
}

export default Progress;