import Sequelize, { Model } from 'sequelize';

class BuyProduct extends Model {
    static init(sequelize) {
        super.init(
            {
                user_id: Sequelize.INTEGER,
                product_id: Sequelize.INTEGER,
                form_of_payment: Sequelize.ENUM(['debit', 'credit']),
                final_price: Sequelize.STRING,
            },
            { sequelize }
        );

        this.addHook('beforeSave', async buyProduct => {
            if (buyProduct.form_of_payment === 'debit') {
                const calcValue = ((await buyProduct.final_price) * 5) / 100;

                buyProduct.final_price -= calcValue;
            }
            return buyProduct.final_price;
        });

        return this;
    }
}

export default BuyProduct;
