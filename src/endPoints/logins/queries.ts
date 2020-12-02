import knex from "../../config/knex";

export const LoginQueries = {
  getLoginByEmail: async (email: string) => {
    const login = await knex("user").where({ email }).first();
    return login;
  },
  singleLoginByUsername: async (email: string) => {
    const loginByUsername = await knex("user").where({ email }).first();
    return loginByUsername;
  },
  updateUserLastLoginByEmail: async (email: String) => {
    let date = knex.fn.now();
    return await knex("users")
      .where({ email })
      .update({ lastLogin: date, updated_at: date }, ["*"]);
  },
  addUser: async (user: object) => {
    return await knex("user").insert(user).returning("*");
  },
  // updateProfileById: async (profileId: number, data: object) => {
  //   return await knex('profiles').where({ profileId })
  //     .update({ ...data, updatedAt: knex.fn.now() }, ['*'])
  // },
};
