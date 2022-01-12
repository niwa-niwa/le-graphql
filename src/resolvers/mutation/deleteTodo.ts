import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const deleteTodo: MutationResolvers["deleteTodo"] = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const userId = "1";

  if (!userId) throw new Error("Authentication error");

  const targetTodo = await prisma.todo.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!targetTodo) throw new Error("Not found Todo.");

  if (targetTodo.userId !== userId) throw new Error("Authentication Error");

  const todo = await prisma.todo.delete({
    where: {
      id: args.id,
    },
    include: {
      user: true,
    },
  });

  return todo;
};
