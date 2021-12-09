import React from 'react';
import classNames from 'classnames';

import styles from './Title.module.scss';

type Props = {
  name: string;
};

const Title: React.FC<Props> = ({ name }) => <div className={classNames(styles.component)}>{name}</div>;

export default Title;
