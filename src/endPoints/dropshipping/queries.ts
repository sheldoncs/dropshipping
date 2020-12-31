import knex from "../../config/knex";

export const DropshippingQueries = {
  getOffers: async () => {
    const allOffers = await knex("offers");
    return allOffers;
  },
  getMaxIdentity: async () => {
    const maxIdentity = await knex("lastidentity")
      .max("lastidentityid as maxidentityid")
      .first();

    return maxIdentity;
  },
  addLastIdentity: async (lastidentity: object) => {
    return await knex("lastidentity").insert(lastidentity);
  },
  getActiveChatters: async (active: number) => {
    const activeChatters = await knex("chatroom").where({
      active,
    });
    return activeChatters;
  },
  getPhotosByCategory: async (categoryid: number) => {
    const photosByCategory = await knex("itemdetails").where({
      categoryid,
    });
    return photosByCategory;
  },
  getAllCategories: async () => {
    const allCategories = await knex("category").where({ status: 1 });
    return allCategories;
  },
  getChatUserByEmail: async (email: string) => {
    const chatroom = await knex("chatroom").where({ email }).first();
    return chatroom;
  },
  getOffer: async (id: number) => {
    const offer = await knex("offers").where({ id }).first();
    return offer;
  },
  getCategory: async (category: string) => {
    const singleCategory = await knex("category")
      .join("headers", "category.id", "=", "headers.categoryid")
      .where({ category })
      .first();
    return singleCategory;
  },
  getOptions: async (categoryid: number) => {
    const itemCategory = await knex("options")
      .select(["id", "title", "option1", "option2", "option3", "option4"])
      .where({ categoryid });
    return itemCategory;
  },
  getItemAndCategory: async (itemid: number) => {
    const itemCategory = await knex("itemdetails")
      .join("category", "category.id", "=", "itemdetails.categoryid")
      .select(["category.category", "itemdetails.option"])
      .where({ itemid })
      .first();
    return itemCategory;
  },
  getItems: async () => {
    const items = await knex("itemdetails")
      .select(["itemdetails.option", "itemdetails.photo", "itemdetails.itemid"])
      .where({ show: 1 });

    return items;
  },
  getPriceOptions: async (categoryid: number) => {
    const priceOptions = await knex("itemprice").where({ categoryid });
    return priceOptions;
  },
  addChatUser: async (user: object) => {
    return await knex("chatroom").insert(user);
  },
  deactivateChatter: async (socketid) => {
    return await knex("chatroom").where({ socketid }).update({ active: 0 });
  },
};
