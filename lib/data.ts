/*
File for all things regarding getting data from the database

*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function getUserByUsername(username: string) {
  return prisma.user.findUnique({ where: { username } });
}

