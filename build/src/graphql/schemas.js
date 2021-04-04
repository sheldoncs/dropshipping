"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const category_1 = require("./schemas/dropshipping/category/category");
const offer_1 = require("./schemas/dropshipping/offer/offer");
const priceoptions_1 = require("./schemas/dropshipping/priceoptions/priceoptions");
const allitems_1 = require("./schemas/dropshipping/allitems/allitems");
const mutation_1 = require("./schemas/dropshipping/mutation");
const user_1 = require("./schemas/dropshipping/user/user");
const chatUser_1 = require("./schemas/dropshipping/chatUser/chatUser");
const photos_1 = require("./schemas/dropshipping/photos/photos");
const options_1 = require("./schemas/dropshipping/options/options");
const lastidentity_1 = require("./schemas/dropshipping/lastidentity/lastidentity");
const countries_1 = require("./schemas/dropshipping/countries/countries");
const order_1 = require("./schemas/dropshipping/order/order");
const query_1 = require("./schemas/dropshipping/query");
exports.typeDefs = [
    query_1.Query,
    options_1.OptionProfile,
    category_1.CategoryProfile,
    lastidentity_1.maxIdentityProfile,
    chatUser_1.CreateSocketResponse,
    chatUser_1.socketProfile,
    countries_1.CountryProfile,
    photos_1.PhotoProfile,
    category_1.MenuCategoryProfile,
    allitems_1.ItemProfile,
    allitems_1.ItemAndCategoryProfile,
    lastidentity_1.lastIdentityProfile,
    lastidentity_1.CreateLastIdentityResponse,
    offer_1.OfferProfile,
    user_1.CreateUserResponse,
    order_1.CreateOrderResponse,
    chatUser_1.CreateChatUserResponse,
    allitems_1.ResetMainPhotoResponse,
    allitems_1.UpdateMainPhotoResponse,
    allitems_1.UpdateMainPhotoProfile,
    allitems_1.ResetMainPhotoProfile,
    mutation_1.userMutation,
    chatUser_1.ChatUserProfile,
    user_1.UserProfile,
    priceoptions_1.PriceOptionsProfile,
    order_1.OrderProfile,
];
