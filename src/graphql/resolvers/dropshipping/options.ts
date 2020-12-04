import { Queries } from "../../../endPoints/queries";

export const getOptions = async (root: any, args: { categoryid: number }) => {
  const options = await Queries.DropshippingQueries.getOptions(args.categoryid);
  return options;
};
