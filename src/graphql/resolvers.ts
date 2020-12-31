import {
  getCategory,
  getAllCategories,
} from "./resolvers/dropshipping/category";
import {
  addLastIdentity,
  getMaxIdentity,
} from "./resolvers/dropshipping/lastidentity";
import { getAllOffers, getOffer } from "./resolvers/dropshipping/offers";
import { addUserInfo, addChatUser } from "./resolvers/dropshipping/user";
import { getItemAndCategory } from "./resolvers/dropshipping/itemandcategory";
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

export const resolvers = {
  Query: {
    getOptions,
    getPhotosByCategory,
    getItemAndCategory,
    getMaxIdentity,
    getCategory,
    getAllCategories,
    getAllOffers,
    getAllItems,
    getPriceOptions,
    getOffer,
    getActiveChatters,
  },
  Mutation: {
    addUserInfo,
    addLastIdentity,
    addChatUser,
    deactivateActiveChatter,
  },
};
