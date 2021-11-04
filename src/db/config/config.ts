import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize('niino_bot', 'root', 'bola1234A@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelizeConnection;