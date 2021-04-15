import * as Yup from 'yup';
import Product from '../models/Product';
import User from '../models/User';
import BuyProduct from '../models/BuyProduct';

class BuyProductsController {
    async store(req, res) {
        const schema = Yup.object().shape({
            form_of_payment: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de validação' });
        }

        try {
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
        } catch (error) {
            return res.status(400).json({
                error: 'Erro de validação, forma de pagamento não identificada',
            });
        }
    }
}

export default new BuyProductsController();
