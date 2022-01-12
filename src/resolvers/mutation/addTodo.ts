import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const addTodo: MutationResolvers["addTodo"] = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  // TEST variable
  const userId = "1";

  if (!userId) throw new Error("Authorization Error");

  const todo = await prisma.todo.create({
    data: {
      title: args.input.title,
      status: "pending",
      userId: userId,
    },
    include: {
      user: true,
    },
  });

  return todo;
};
