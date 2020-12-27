import {
  CategoryProfile,
  MenuCategoryProfile,
} from "./schemas/dropshipping/category/category";
import { OfferProfile } from "./schemas/dropshipping/offer/offer";
import { PriceOptionsProfile } from "./schemas/dropshipping/priceoptions/priceoptions";
import { Query } from "./schemas/dropshipping/query";
import {
  ItemProfile,
  ItemAndCategoryProfile,
} from "./schemas/dropshipping/allitems/allitems";
import { userMutation } from "./schemas/dropshipping/mutation";
import {
  UserProfile,
  CreateUserResponse,
} from "./schemas/dropshipping/user/user";
import {
  ChatUserProfile,
  CreateChatUserResponse,
  CreateSocketResponse,
  socketProfile,
} from "./schemas/dropshipping/chatUser/chatUser";

import { PhotoProfile } from "./schemas/dropshipping/photos/photos";
import { OptionProfile } from "./schemas/dropshipping/options/options";
export const typeDefs = [
  Query,
  OptionProfile,
  CategoryProfile,
  CreateSocketResponse,
  socketProfile,
  PhotoProfile,
  MenuCategoryProfile,
  ItemProfile,
  ItemAndCategoryProfile,
  OfferProfile,
  CreateUserResponse,
  CreateChatUserResponse,
  userMutation,
  ChatUserProfile,
  UserProfile,
  PriceOptionsProfile,
];
