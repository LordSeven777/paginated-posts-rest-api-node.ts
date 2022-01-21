import { Sequelize } from "sequelize";

// Database configs
import dbConfig from "./dbConfig";

// The sequelize database connection instance
let sequelize!: Sequelize;
if (process.env.NODE_ENV) {
    const { database_url, pool } = dbConfig.production;
    sequelize = new Sequelize(database_url, { pool });
}
else {
    const { username, database, password, ...rest } = dbConfig.development;
    sequelize = new Sequelize(database, username, password, { ...rest });
}

export default sequelize;
