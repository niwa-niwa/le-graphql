import { prisma } from "../../lib/prisma";
import { QueryResolvers } from "../../types/generated/graphql";

export const getTodos: QueryResolvers["getTodos"] = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const userId = "1";
  
  const todos = await prisma.todo.findMany({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  return todos;
};
