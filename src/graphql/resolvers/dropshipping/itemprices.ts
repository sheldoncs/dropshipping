import { Queries } from "../../../endPoints/queries";

export const getAllItems = async (root: any, args: { categoryid: number }) => {
  const allItems = await Queries.DropshippingQueries.getItems(args.categoryid);
  return allItems;
};

export const getPriceOptions = async (
  root: any,
  args: { categoryid: number }
) => {
  const priceOptions = await Queries.DropshippingQueries.getPriceOptions(
    args.categoryid
  );
  return priceOptions;
};
