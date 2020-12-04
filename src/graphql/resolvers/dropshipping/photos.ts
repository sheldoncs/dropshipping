import { Queries } from "../../../endPoints/queries";

export const getPhotosByCategory = async (
  root: any,
  args: { categoryid: number }
) => {
  const photos = await Queries.DropshippingQueries.getPhotosByCategory(
    args.categoryid
  );
  return photos;
};
