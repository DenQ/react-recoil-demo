import React from 'react';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';

import Title from '../common/header/title';
import { selectors as formSelectors } from '../Form';
import styles from './Echo.module.scss';

const Echo: React.FC = () => {
  const user = useRecoilValue(formSelectors.userStateSelector);

  return (
    <div className={classNames(styles.component, 'column')}>
      <Title name="Echo" />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Echo;
