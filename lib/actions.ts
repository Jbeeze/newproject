/*
File for all things regarding actions that can be performed on the database 



*/

import { PrismaClient } from "@prisma/client";
import { User } from "./definitions";
const prisma = new PrismaClient();

export async function createUser(user: User) {
  return prisma.user.create({ data: user });
}


