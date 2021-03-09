"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropshippingQueries = void 0;
const knex_1 = __importDefault(require("../../config/knex"));
exports.DropshippingQueries = {
    getOffers: async () => {
        const allOffers = await knex_1.default("offers");
        return allOffers;
    },
    getCountries: async () => {
        const allCountries = await knex_1.default("apps_countries").where("show", ">", 0);
        return allCountries;
    },
    getNonDiscountOffers: async () => {
        const offers = await knex_1.default("offers").where("itemdetailsid", ">", 0);
        return offers;
    },
    getMaxIdentity: async () => {
        const maxIdentity = await knex_1.default("lastidentity")
            .max("lastidentityid as maxidentityid")
            .first();
        return maxIdentity;
    },
    addLastIdentity: async (lastidentity) => {
        return await knex_1.default("lastidentity").insert(lastidentity);
    },
    getActiveChatters: async (active) => {
        const activeChatters = await knex_1.default("chatroom").where({
            active,
        });
        return activeChatters;
    },
    getPhotosByCategory: async (categoryid) => {
        const photosByCategory = await knex_1.default("itemdetails").where({
            categoryid,
            show: 1,
        });
        return photosByCategory;
    },
    getAllCategories: async () => {
        const allCategories = await knex_1.default("category").where({ status: 1 });
        return allCategories;
    },
    getChatUserByEmail: async (email) => {
        const chatroom = await knex_1.default("chatroom").where({ email }).first();
        return chatroom;
    },
    getOffer: async (id) => {
        const offer = await knex_1.default("offers").where({ id }).first();
        return offer;
    },
    getCategory: async (category) => {
        const singleCategory = await knex_1.default("category")
            .join("headers", "category.id", "=", "headers.categoryid")
            .where({ category })
            .first();
        return singleCategory;
    },
    getOrderList: async (orderid) => {
        const orderList = await knex_1.default("orders").where({ orderid });
        return orderList;
    },
    getOptions: async (categoryid) => {
        const itemCategory = await knex_1.default("options")
            .select(["id", "title", "option1", "option2", "option3", "option4"])
            .where({ categoryid });
        return itemCategory;
    },
    getItemAndCategory: async (itemid) => {
        const itemCategory = await knex_1.default("itemdetails")
            .join("category", "category.id", "=", "itemdetails.categoryid")
            .select(["category.category", "itemdetails.option"])
            .where({ itemid })
            .first();
        return itemCategory;
    },
    getItems: async (categoryid) => {
        const items = await knex_1.default("itemdetails")
            .select([
            "itemdetails.option",
            "itemdetails.photo",
            "itemdetails.itemid",
            "itemdetails.categoryid",
            "itemdetails.price",
        ])
            .where({ show: 1, categoryid });
        return items;
    },
    getPriceOptions: async (categoryid) => {
        const priceOptions = await knex_1.default("itemprice").where({ categoryid });
        return priceOptions;
    },
    addChatUser: async (user) => {
        return await knex_1.default("chatroom").insert(user);
    },
    addOrder: async (order) => {
        return await knex_1.default("orders").insert(order);
    },
    deactivateChatter: async (socketid) => {
        return await knex_1.default("chatroom").where({ socketid }).update({ active: 0 });
    },
    updateMainPhoto: async (itemid) => {
        return await knex_1.default("itemdetails").where({ itemid }).update({ mainphoto: 1 });
    },
    resetMainPhoto: async (categoryid) => {
        return await knex_1.default("itemdetails")
            .where({ categoryid })
            .update({ mainphoto: 0 });
    },
};
