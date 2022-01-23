import { Dialect } from "sequelize";

export const development = {
    username: "root",
    password: "",
    database: "api_posts",
    host: "127.0.0.1",
    dialect: "mysql" as Dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export const production = {
    database_url: process.env.PROD_DATABASE_URL || '',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default {
    development,
    production
}