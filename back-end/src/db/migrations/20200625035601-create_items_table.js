'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			price: {
				type: Sequelize.FLOAT,
				allowNull: false
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'Users',
					key: 'id',
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			}
		});

	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Items');
	}
};
