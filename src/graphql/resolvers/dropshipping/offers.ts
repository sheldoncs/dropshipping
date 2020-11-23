import { Queries } from "../../../endPoints/queries";

export const getAllOffers = async () => {
  const allOffers = await Queries.DropshippingQueries.getOffers();
  return allOffers;
};
