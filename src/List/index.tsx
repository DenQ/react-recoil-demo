import React from 'react';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import styles from './List.module.scss';
import Title from '../common/header/title';
import { selectors as formSelectors } from '../Form';

const List: React.FC = () => {
  const users = useRecoilValue(formSelectors.usersStateSelector);

  return (
    <div className={classNames(styles.component, 'column')}>
      <Title name="List" />
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default List;
