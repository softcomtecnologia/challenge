import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";

export class Item extends Model {
	public id!: number;
	public name!: string;
	public price!: number;
	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

export interface ItemInterface {
	id: number;
	name: string;
	price: number;
	userId: number;
}

Item.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	},
	{
		// underscored: true,
		tableName: "items",
		sequelize: database // this bit is important
	}
);

//CAUTION!!!!!!!!!
//Item.sync({ force: true }).then(() => console.log("[SEQUELIZE] --> Items table created"));
//!!!!!!!!!!!!!!!!
