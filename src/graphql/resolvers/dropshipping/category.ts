import { Queries } from "../../../endPoints/queries";

export const getCategory = async (root: any, args: { category: string }) => {
  const categories = await Queries.DropshippingQueries.getCategory(
    args.category
  );
  return categories;
};
export const getAllCategories = async () => {
  const allCategories = await Queries.DropshippingQueries.getAllCategories();
  return allCategories;
};
