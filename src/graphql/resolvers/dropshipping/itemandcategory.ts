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
