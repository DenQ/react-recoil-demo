import { atom } from 'recoil';
import { userInitialForm, usersInitial } from './constants';

export const userStateAtom = atom({
  key: 'userState',
  default: userInitialForm,
});

export const usersStateAtom = atom({
  key: 'usersState',
  default: usersInitial,
});

export default {
  userStateAtom,
  usersStateAtom,
};
