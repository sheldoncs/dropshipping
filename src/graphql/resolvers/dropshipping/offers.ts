import { Queries } from "../../../endPoints/queries";

export const getAllOffers = async () => {
  const allOffers = await Queries.DropshippingQueries.getOffers();
  return allOffers;
};
export const getOffer = async (root: any, args: { id: number }) => {
  const offer = await Queries.DropshippingQueries.getOffer(args.id);
  return offer;
};
