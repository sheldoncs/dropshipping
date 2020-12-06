import knex from "../../config/knex";

export const DropshippingQueries = {
  getOffers: async () => {
    const allOffers = await knex("offers");
    return allOffers;
  },
  getPhotosByCategory: async (categoryid: number) => {
    const photosByCategory = await knex("itemdetails").where({
      categoryid,
    });
    return photosByCategory;
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
    const items = await knex("itemdetails").select([
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
