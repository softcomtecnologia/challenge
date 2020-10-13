import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { database } from "../config/database";
import { Item } from "./item.model";


export interface UserInterface {
	id: number;
	name: string;
	email: string;
	cnpj: string;
	password: string;
}

export class User extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public cnpj!: string;
	public password!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	generateAuthToken(): string {

		const user = this;
		const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET)

		return token;

	}

	checkAuthToken(token: string): boolean {

		const user = this;

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

		if (decodedToken.id && decodedToken.id === user.id) {
			return true
		} else {
			return false
		}

	}

	static async getByCredentials(userData: UserInterface): Promise<User> {
		const user = await User.findOne({ where: { email: userData.email } });

		if (!user) {
			return null;
		}

		const passwordMatch = await bcrypt.compare(userData.password, user.password);

		if (!passwordMatch) {
			return null;
		}

		return user;
	}

}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: new DataTypes.STRING(128),
			allowNull: false
		},
		email: {
			type: new DataTypes.STRING,
			allowNull: false,
			unique: {
				name: 'email',
				msg: 'e-mail already registered'
			}

		},
		cnpj: {
			type: new DataTypes.STRING,
			allowNull: true,
			unique: {
				name: 'cnpj',
				msg: 'cnpj already registered'
			}

		},
		password: {
			type: new DataTypes.STRING,
			allowNull: false
		}
	},
	{
		// underscored: true,
		tableName: "users",
		sequelize: database // this bit is important
	}
);

User.hasMany(Item, {
	sourceKey: "id",
	foreignKey: "userId",
	as: "items"
});

function generateHash(user: UserInterface) {
	let salt = 8//bcrypt.genSaltSync();
	return user.password = bcrypt.hashSync(user.password, salt);
}

User.beforeCreate((user) => generateHash(user))
User.beforeUpdate((user) => generateHash(user))

//CAUTION!!!!!!!!!
//User.sync({ force: true }).then(() => console.log("[SEQUELIZE] --> Users table created"));
//!!!!!!!!!!!!!!!!
