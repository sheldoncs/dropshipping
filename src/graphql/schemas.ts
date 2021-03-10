import {
  CategoryProfile,
  MenuCategoryProfile,
} from "./schemas/dropshipping/category/category";
import { OfferProfile } from "./schemas/dropshipping/offer/offer";
import { PriceOptionsProfile } from "./schemas/dropshipping/priceoptions/priceoptions";

import {
  ItemProfile,
  ItemAndCategoryProfile,
  UpdateMainPhotoProfile,
  ResetMainPhotoProfile,
  ResetMainPhotoResponse,
  UpdateMainPhotoResponse,
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
import {
  maxIdentityProfile,
  lastIdentityProfile,
  CreateLastIdentityResponse,
} from "./schemas/dropshipping/lastidentity/lastidentity";
import { CountryProfile } from "./schemas/dropshipping/countries/countries";
import {
  OrderProfile,
  CreateOrderResponse,
} from "./schemas/dropshipping/order/order";
import { Query } from "./schemas/dropshipping/query";
export const typeDefs = [
  Query,
  OptionProfile,
  CategoryProfile,
  maxIdentityProfile,
  CreateSocketResponse,
  socketProfile,
  CountryProfile,
  PhotoProfile,
  MenuCategoryProfile,
  ItemProfile,
  ItemAndCategoryProfile,
  lastIdentityProfile,
  CreateLastIdentityResponse,
  OfferProfile,
  CreateUserResponse,
  CreateOrderResponse,
  CreateChatUserResponse,
  ResetMainPhotoResponse,
  UpdateMainPhotoResponse,
  UpdateMainPhotoProfile,
  ResetMainPhotoProfile,
  userMutation,
  ChatUserProfile,
  UserProfile,
  PriceOptionsProfile,
  OrderProfile,
];
