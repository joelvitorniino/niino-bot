import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: './database.sqlite'
});

export default sequelizeConnection;