import { Queries } from "../../../endPoints/queries";

export const getItemAndCategory = async (
  root: any,
  args: { itemid: number }
) => {
  const itemAndCategory = await Queries.DropshippingQueries.getItemAndCategory(
    args.itemid
  );
  return itemAndCategory;
};

export const resetMainPhoto = async (
  root: any,
  args: { categoryid: number }
) => {
  let chatter = await Queries.DropshippingQueries.resetMainPhoto(
    args.categoryid
  );

  let Category = {
    catid: args.categoryid,
  };

  const message = `Category, ${args.categoryid} reset`;
  return { message, Category };
};
export const updateMainPhoto = async (root: any, args: { itemid: number }) => {
  let mainPhoto = await Queries.DropshippingQueries.updateMainPhoto(
    args.itemid
  );

  let UpdateItem = {
    itemid: args.itemid,
  };

  const message = `Item, ${args.itemid} updated`;
  return { message, UpdateItem };
};
