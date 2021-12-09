import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { FieldNames, UserDTO } from './@interfaces';
import { usersStateAtom, userStateAtom } from './atoms';
import styles from './Form.module.scss';
import Title from '../common/header/title';

const TodoList: React.FC = () => {
  const [user, setUser] = useRecoilState<UserDTO>(userStateAtom);
  const [users, setUsers] = useRecoilState<UserDTO[]>(usersStateAtom);
  const [currentId, setCurrentId] = useState<number>(1);

  const onChange = (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setUser({
      ...user,
      [fieldName]: value,
    });
  };

  const resetForm = useResetRecoilState(userStateAtom);

  const isModified = useMemo(() => {
    return user[FieldNames.FIRST_NAME] || user[FieldNames.LAST_NAME] || user[FieldNames.AGE];
  }, [user]);

  const onSubmit = useCallback(() => {
    if (isModified) {
      const newUser = {
        ...user,
        [FieldNames.ID]: currentId,
      };
      setUsers([...users, newUser]);
      resetForm();
      setCurrentId(currentId + 1);
    }
  }, [isModified, currentId, resetForm, setUsers, user, users]);

  return (
    <div className={classNames(styles.component, 'column')}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Title name="Form" />
        <TextField
          variant="standard"
          value={user.firstName}
          onChange={onChange('firstName')}
          placeholder="First Name"
        />
        <TextField variant="standard" value={user.lastName} onChange={onChange('lastName')} placeholder="Last Name" />
        <TextField variant="standard" type="number" value={user.age} onChange={onChange('age')} placeholder="Age" />
        <div className={classNames(styles.footer)}>
          <Button variant="contained" size="small" color="secondary" onClick={resetForm}>
            Clear
          </Button>
          <Button variant="contained" size="small" color="primary" onClick={onSubmit} disabled={!isModified}>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default TodoList;
