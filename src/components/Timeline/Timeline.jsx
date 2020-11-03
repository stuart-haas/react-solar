import React from 'react';
import classnames from 'classnames';
import styles from './Timeline.module.scss';

const Timeline = (props) => {

  const data = props.data.map((item) => {
    item.startTimestamp = new Date(item.start).getTime() / 1000;
    item.endTimestamp = new Date(item.end).getTime() / 1000;
    return item;
  });

  const minDate = getMinDate(data);
  const maxDate = getMaxDate(data);

  return (
    <div className={styles.module}>
      <div className={styles.label}>
        {props.label}
      </div>
      <div className={styles.timeline}>
        <div className={classnames(styles.value, 'min')}>{timestampToDate(minDate)}</div>
        <div className={styles.background}>
          {data.map((item, index) => (
            <div key={index} className={styles.indicator} style={{ left: `${getPosition(item, minDate, maxDate)}%`, width: `${getWidth(item, minDate, maxDate)}%` }}>
              <div className={styles.tooltip}>{item.start}-{item.end}</div>
              <div className={classnames(styles.value, styles.index)}>{item.title}</div>
            </div>
          ))}
        </div>
        <div className={classnames(styles.value, 'max')}>{timestampToDate(maxDate)}</div>
      </div>
    </div>
  )
}

const getPosition = (item, minDate, maxDate) => {
  return Math.round((item.startTimestamp - minDate) / (maxDate - minDate) * 100);
}

const getWidth = (item, minDate, maxDate) => {
  return Math.round((item.endTimestamp - item.startTimestamp) / (maxDate - minDate) * 100);
}

const getMinDate = (data) => {
  return data.reduce((min, p) => p.startTimestamp < min ? p.startTimestamp : min, data[0].startTimestamp);
}

const getMaxDate = (data) => {
  return data.reduce((max, p) => p.endTimestamp > max ? p.endTimestamp : max, data[0].endTimestamp);
}

const timestampToDate = (value) => {
  const date = new Date(value * 1000);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return `${month}/${day}/${year}`
}

export default Timeline;