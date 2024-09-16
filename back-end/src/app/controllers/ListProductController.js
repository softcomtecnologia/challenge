import Product from '../models/Product';
import User from '../models/User';

class ListProductController {
    async index(req, res) {
        const product = await Product.findAll({
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

export default new ListProductController();
