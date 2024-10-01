/*
File for all things regarding the definitions of the database models

*/

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};


