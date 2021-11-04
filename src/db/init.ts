import Niino from './models/Niino';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
    Niino.sync({ alter: isDev });
};

dbInit();