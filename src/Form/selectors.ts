import { selector } from 'recoil';
import { usersStateAtom, userStateAtom } from './atoms';

export const userStateSelector = selector({
  key: 'userStateSelector',
  get: ({ get }) => {
    return get(userStateAtom);
  },
});

export const usersStateSelector = selector({
  key: 'usersStateSelector',
  get: ({ get }) => {
    return get(usersStateAtom);
  },
});

export default {
  userStateSelector,
  usersStateSelector,
};
