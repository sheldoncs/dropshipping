import knex from "../../config/knex";

export const LoginQueries = {
  getLoginByEmail: async (email: string) => {
    const login = await knex("user").where({ email }).first();
    return login;
  },
  updateUserLastLoginByEmail: async (email: String) => {
    let date = knex.fn.now();
    return await knex("users")
      .where({ email })
      .update({ lastLogin: date }, ["*"]);
  },
  addUser: async (user: object) => {
    return await knex("users").insert(user).returning("*");
  },
};
