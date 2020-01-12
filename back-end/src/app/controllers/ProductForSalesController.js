import Product from '../models/Product';
import User from '../models/User';

class ProductForSalesController {
    async index(req, res) {
        const idUser = req.params.id;

        const user = await User.findByPk(idUser);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encotrado' });
        }

        const product = await Product.findAll({
            where: { user_id: idUser },
            attributes: ['id', 'name', 'description', 'price'],
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name'],
                },
            ],
        });
        return res.json(product);
    }

    async show(req, res) {
        // const idUser = req.params.id;
        const { id, idItem } = req.params;

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

        const product = await Product.findAll({
            where: { id: idItem, user_id: id },
            attributes: ['id', 'name', 'description', 'price'],
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name'],
                },
            ],
        });
        return res.json(product);
    }
}

export default new ProductForSalesController();
