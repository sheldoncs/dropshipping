import {
  CategoryProfile,
  MenuCategoryProfile,
} from "./schemas/dropshipping/category/category";
import { OfferProfile } from "./schemas/dropshipping/offer/offer";
import { PriceOptionsProfile } from "./schemas/dropshipping/priceoptions/priceoptions";
import { Query } from "./schemas/dropshipping/Query";
import { ItemProfile } from "./schemas/dropshipping/allitems/allitems";

export const typeDefs = [
  Query,
  CategoryProfile,
  MenuCategoryProfile,
  ItemProfile,
  OfferProfile,
  PriceOptionsProfile,
];
