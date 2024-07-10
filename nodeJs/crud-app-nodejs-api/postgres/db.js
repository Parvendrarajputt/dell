import { Sequelize } from 'sequelize';
import { createUserModel } from '../model/userSchema.js';

const sequelize = new Sequelize('postgresql', 'postgres', 'postgresql', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 2020,
});

let userModel;

export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        userModel = createUserModel(sequelize);

        console.log("data In contoller DB.js",userModel)
        await sequelize.sync();
        console.log("Database Sync!");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize, userModel };
