import { Queries } from "../../../endPoints/queries";

export const getAllItems = async () => {
  const allItems = await Queries.DropshippingQueries.getItems();
  return allItems;
};

export const getPriceOptions = async () => {
  const priceOptions = await Queries.DropshippingQueries.getPriceOptions();
  return priceOptions;
};