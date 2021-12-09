export enum FieldNames {
  ID = 'id',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AGE = 'age',
}

export type UserDTO = {
  [FieldNames.ID]: number | string;
  [FieldNames.FIRST_NAME]: string;
  [FieldNames.LAST_NAME]: string;
  [FieldNames.AGE]: number | string;
};
