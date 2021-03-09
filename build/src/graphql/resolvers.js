"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const category_1 = require("./resolvers/dropshipping/category");
const lastidentity_1 = require("./resolvers/dropshipping/lastidentity");
const offers_1 = require("./resolvers/dropshipping/offers");
const user_1 = require("./resolvers/dropshipping/user");
const itemandcategory_1 = require("./resolvers/dropshipping/itemandcategory");
const itemprices_1 = require("./resolvers/dropshipping/itemprices");
const photos_1 = require("./resolvers/dropshipping/photos");
const options_1 = require("./resolvers/dropshipping/options");
const chatters_1 = require("./resolvers/dropshipping/chatters");
const countries_1 = require("./resolvers/dropshipping/countries");
const orders_1 = require("./resolvers/dropshipping/orders");
exports.resolvers = {
    Query: {
        getOptions: options_1.getOptions,
        getOrderList: orders_1.getOrderList,
        getPhotosByCategory: photos_1.getPhotosByCategory,
        getAllCountries: countries_1.getAllCountries,
        getItemAndCategory: itemandcategory_1.getItemAndCategory,
        getMaxIdentity: lastidentity_1.getMaxIdentity,
        getCategory: category_1.getCategory,
        getAllCategories: category_1.getAllCategories,
        getAllOffers: offers_1.getAllOffers,
        getAllItems: itemprices_1.getAllItems,
        getPriceOptions: itemprices_1.getPriceOptions,
        getOffer: offers_1.getOffer,
        getNonDiscountOffers: offers_1.getNonDiscountOffers,
        getActiveChatters: chatters_1.getActiveChatters,
    },
    Mutation: {
        addUserInfo: user_1.addUserInfo,
        addLastIdentity: lastidentity_1.addLastIdentity,
        addChatUser: user_1.addChatUser,
        deactivateActiveChatter: chatters_1.deactivateActiveChatter,
        resetMainPhoto: itemandcategory_1.resetMainPhoto,
        updateMainPhoto: itemandcategory_1.updateMainPhoto,
        addOrders: orders_1.addOrders,
    },
};
