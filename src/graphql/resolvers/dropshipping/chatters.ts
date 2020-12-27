import { Queries } from "../../../endPoints/queries";

export const getActiveChatters = async (
  root: any,
  args: { active: number }
) => {
  const categories = await Queries.DropshippingQueries.getActiveChatters(
    args.active
  );
  return categories;
};

export const deactivateActiveChatter = async (
  root: any,
  args: { socketid: string }
) => {
  let chatter = await Queries.DropshippingQueries.deactivateChatter(
    args.socketid
  );

  let socket = {
    socket: args.socketid,
  };

  const message = `User, ${args.socketid} deactivated`;
  return { message, socket };
};
