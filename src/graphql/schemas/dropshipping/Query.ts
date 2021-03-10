import { gql } from "apollo-server-express";

export const Query = gql`
  # All database queries
  type Query {
    getCategory(category: String): Category
    getAllCategories: [Menu!]
    getAllOffers: [Offer!]
    getOrderList: [Order!]
    getOffer(id: Int): Offer
    getAllItems(categoryid: Int): [ItemPrice!]
    getNonDiscountOffers: [Offer!]
    getAllCountries: [Country!]
    getPriceOptions(categoryid: Int): [PriceOptions!]
    getPhotosByCategory(categoryid: Int): [Photos!]
    getItemAndCategory(itemid: Int): ItemAndCategory
    getOptions(categoryid: Int): [Option!]
    getActiveChatters(active: Int): [ChatUser!]
    getMaxIdentity: MaxIdentity
  }
`;
