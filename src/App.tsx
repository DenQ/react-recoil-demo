import React from 'react';
import classNames from 'classnames';
import Form from './Form';
import Echo from './Echo';
import List from './List';

import styles from './App.module.scss';

const App: React.FC = () => (
  <div className={classNames(styles.component)}>
    <Form />
    <Echo />
    <List />
  </div>
);

export default App;
