import {
  getCategory,
  getAllCategories,
} from "./resolvers/dropshipping/category";
import { getAllOffers } from "./resolvers/dropshipping/offers";
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
  },
};
