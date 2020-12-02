import knex from "../../config/knex";

export const DropshippingQueries = {
  getOffers: async () => {
    const allOffers = await knex("offers");
    return allOffers;
  },
  getAllCategories: async () => {
    const allCategories = await knex("category");
    return allCategories;
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
  getItems: async () => {
    const items = await knex("itemdetails").select([
      "itemdetails.id",
      "itemdetails.option",
      "itemdetails.photo",
      "itemdetails.itemid",
    ]);

    return items;
  },
  getPriceOptions: async () => {
    const priceOptions = await knex("itemprice");
    return priceOptions;
  },
};
