import {
  getCategory,
  getAllCategories,
} from "./resolvers/dropshipping/category";
import {
  addLastIdentity,
  getMaxIdentity,
} from "./resolvers/dropshipping/lastidentity";
import {
  getAllOffers,
  getOffer,
  getNonDiscountOffers,
} from "./resolvers/dropshipping/offers";
import { addUserInfo, addChatUser } from "./resolvers/dropshipping/user";
import {
  getItemAndCategory,
  resetMainPhoto,
  updateMainPhoto,
} from "./resolvers/dropshipping/itemandcategory";
import {
  getAllItems,
  getPriceOptions,
} from "./resolvers/dropshipping/itemprices";
import { getPhotosByCategory } from "./resolvers/dropshipping/photos";
import { getOptions } from "./resolvers/dropshipping/options";
import {
  getActiveChatters,
  deactivateActiveChatter,
} from "./resolvers/dropshipping/chatters";
import { getAllCountries } from "./resolvers/dropshipping/countries";
import { addOrders, getOrderList } from "./resolvers/dropshipping/orders";

export const resolvers = {
  Query: {
    getOptions,
    getOrderList,
    getPhotosByCategory,
    getAllCountries,
    getItemAndCategory,
    getMaxIdentity,
    getCategory,
    getAllCategories,
    getAllOffers,
    getAllItems,
    getPriceOptions,
    getOffer,
    getNonDiscountOffers,
    getActiveChatters,
  },
  Mutation: {
    addUserInfo,
    addLastIdentity,
    addChatUser,
    deactivateActiveChatter,
    resetMainPhoto,
    updateMainPhoto,
    addOrders,
  },
};
