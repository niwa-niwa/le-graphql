import { prisma } from "../../lib/prisma";
import { QueryResolvers } from "../../types/generated/graphql";

export const getUser: QueryResolvers["getUser"] = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const userId = "1";

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};
