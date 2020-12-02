import {
  CategoryProfile,
  MenuCategoryProfile,
} from "./schemas/dropshipping/category/category";
import { OfferProfile } from "./schemas/dropshipping/offer/offer";
import { PriceOptionsProfile } from "./schemas/dropshipping/priceoptions/priceoptions";
import { Query } from "./schemas/dropshipping/query";
import { ItemProfile } from "./schemas/dropshipping/allitems/allitems";
import { userMutation } from "./schemas/dropshipping/mutation";
import { CreateUserResponse } from "./schemas/dropshipping/user/user";
import { UserProfile } from "./schemas/dropshipping/user/user";

export const typeDefs = [
  Query,
  CategoryProfile,
  MenuCategoryProfile,
  ItemProfile,
  OfferProfile,
  CreateUserResponse,
  userMutation,
  UserProfile,
  PriceOptionsProfile,
];
