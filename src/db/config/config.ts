import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: '/home/joel/Documents/niino-bot/src/db/database.sqlite',
});

export default sequelizeConnection;