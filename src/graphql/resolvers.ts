import {
  getCategory,
  getAllCategories,
} from "./resolvers/dropshipping/category";
import { getAllOffers, getOffer } from "./resolvers/dropshipping/offers";
import { addUserInfo } from "./resolvers/dropshipping/user";
import {
  getAllItems,
  getPriceOptions,
} from "./resolvers/dropshipping/itemprices";
export const resolvers = {
  Query: {
    getCategory,
    getAllCategories,
    getAllOffers,
    getAllItems,
    getPriceOptions,
    getOffer,
  },
  Mutation: { addUserInfo },
};
