import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const updateUser: MutationResolvers["updateUser"] = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const userId = "1";

  if (!userId) throw new Error("Authentication Error");

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) throw new Error("Not found error");

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: args.input.name,
    },
  });

  return updatedUser;
};
