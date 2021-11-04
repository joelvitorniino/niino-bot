import { DataTypes, Model, Optional } from "sequelize";
import { GroupChatId } from '@open-wa/wa-automate';
import sequelizeConnection from '../config/config';

interface NiinoAttributes {
    id: number;
    groupId: string | GroupChatId;
    command: string;
    createdAt?: Date,
    updatedAt?: Date;
};

export interface NiinoInput extends Optional<NiinoAttributes, 'id'> {};
export interface NiinoOutput extends Required<NiinoAttributes> {};

class Niino extends Model<NiinoAttributes, NiinoInput> {
    public id!: number;
    public groupId!: string;
    public command!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};

Niino.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    groupId: {
        type: DataTypes.STRING,
        allowNull: false
    },

    command: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'notallow_commands'
});

export default Niino;