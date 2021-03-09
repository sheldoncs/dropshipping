import { Queries } from "../../../endPoints/queries";

export const getAllCountries = async () => {
  const allCountries = await Queries.DropshippingQueries.getCountries();
  return allCountries;
};
