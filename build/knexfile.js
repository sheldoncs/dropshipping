"use strict";
require("dotenv/config");
module.exports = {
    development: {
        client: "mysql",
        // connection: "mysql://admin:kentish@localhost:3306/sellers",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: `./src/data/migrations`,
        },
        seeds: {
            directory: "./src/data/seeds",
        },
        useNullAsDefault: true,
    },
    production: {
        client: "mysql",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: `${__dirname}/src/dats/migrations`,
        },
        seeds: {
            directory: `${__dirname}/src/data/seeds`,
        },
        useNullAsDefault: true,
        pool: {
            min: 2,
            max: 5,
        },
    },
};
