import React from 'react';
import styles from './Dashboard.module.scss';

const Dashboard = (props) => {
  return (
    <div className={styles.module}>
      {props.children}
    </div>
  );
}

export default Dashboard;