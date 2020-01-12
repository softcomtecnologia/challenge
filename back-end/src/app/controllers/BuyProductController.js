import Product from '../models/Product';
import User from '../models/User';
import BuyProduct from '../models/BuyProduct';

class BuyProductsController {
    async store(req, res) {
        const { id, idItem } = req.params;

        const { form_of_payment } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encotrado' });
        }

        const item = await Product.findOne({
            where: { id: idItem, user_id: id },
        });

        if (!item) {
            return res.status(400).json({ error: 'Produto não encotrado' });
        }

        const buy = await BuyProduct.create({
            user_id: req.userId,
            product_id: idItem,
            form_of_payment,
            final_price: item.price,
        });

        return res.json(buy);
    }
}

export default new BuyProductsController();
