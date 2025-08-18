import { Sequelize } from "sequelize";

export default (sequelize, Sequelize) => {
    const Venda = sequelize.define("vendas", {
        total: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        formaPagamento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Venda;
};
