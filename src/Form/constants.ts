import { UserDTO, FieldNames } from './@interfaces';

export const userInitialForm: UserDTO = {
  [FieldNames.ID]: '',
  [FieldNames.FIRST_NAME]: '',
  [FieldNames.LAST_NAME]: '',
  [FieldNames.AGE]: '',
};

export const usersInitial: UserDTO[] = [];
