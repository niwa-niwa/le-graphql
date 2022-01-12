import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const createUser: MutationResolvers["createUser"] = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const userId = Math.random().toString(32).substring(2);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    throw new Error("Already exists user. try again");
  }

  const createdUser = await prisma.user.create({
    data: {
      id: userId,
      name: `user_${userId.slice(0, 4)}`,
    },
  });

  return createdUser;
};
