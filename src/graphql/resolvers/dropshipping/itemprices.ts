import { Queries } from "../../../endPoints/queries";

export const getAllItems = async () => {
  const allItems = await Queries.DropshippingQueries.getItems();
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
