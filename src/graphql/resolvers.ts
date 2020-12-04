import {
  getCategory,
  getAllCategories,
} from "./resolvers/dropshipping/category";
import { getAllOffers, getOffer } from "./resolvers/dropshipping/offers";
import { addUserInfo } from "./resolvers/dropshipping/user";
import { getItemAndCategory } from "./resolvers/dropshipping/itemandcategory";
import {
  getAllItems,
  getPriceOptions,
} from "./resolvers/dropshipping/itemprices";
import { getPhotosByCategory } from "./resolvers/dropshipping/photos";
import { getOptions } from "./resolvers/dropshipping/options";

export const resolvers = {
  Query: {
    getOptions,
    getPhotosByCategory,
    getItemAndCategory,
    getCategory,
    getAllCategories,
    getAllOffers,
    getAllItems,
    getPriceOptions,
    getOffer,
  },
  Mutation: { addUserInfo },
};
