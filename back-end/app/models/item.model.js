import { Sequelize } from "sequelize";

export default (sequelize ,Sequelize) => {
    const Item = sequelize.define("itens", {
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.DECIMAL(5,2),
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Item;
}