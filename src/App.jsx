import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Progress from './components/Progress/Progress';
import Time from './components/Time/Time';
import Column from './components/Column/Column';
import Row from './components/Row/Row';
import Timeline from './components/Timeline/Timeline';
import styles from './App.module.scss';

const ThemeContext = React.createContext('dark');

const timelineData = [
  {
    title: 'Mars One',
    start: '06/13/2025',
    end: '09/18/2027'
  },
  {
    title: 'Jovian Endeavour',
    start: '05/07/2043',
    end: '06/11/2073'
  },
  {
    title: 'Sol Exodus',
    start: '10/30/2125',
    end: '05/11/2145',
  }
]

const App = () => {
  return (
    <ThemeContext.Provider value='dark'>
      <div className={styles.container}>
        <Row>
          <Column width={'one-quarter'}>
            <Dashboard>
              <Time />
              <Progress label='DESTINATION THRESHOLD' min={0} max={320} value={120} />
              <Progress label='FUEL LEVEL' min={0} max={250} value={180} />
            </Dashboard>
            <Dashboard>
              <Progress label='DESTINATION THRESHOLD' min={0} max={320} value={120} />
              <Progress label='FUEL LEVEL' min={0} max={250} value={180} />
            </Dashboard>
          </Column>
          <Column type={'divider'} />
          <Column width={'three-quarter'}>
            <Dashboard>
              <Timeline label={'EXOGENESIS'} data={timelineData} />
            </Dashboard>
          </Column>
        </Row>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
