import Product from '../models/Product';

class ItemController {
    async store(req, res) {
        const { name, description, price } = req.body;

        const product = await Product.create({
            name,
            description,
            price,
            user_id: req.userId,
        });

        return res.json(product);
    }

    async index(req, res) {
        const product = await Product.findAll({
            where: { user_id: req.userId },
            attributes: ['id', 'name', 'description', 'price'],
        });

        if (!product) {
            return res.status(400).json({ error: 'produto não encontrado' });
        }

        return res.json(product);
    }

    async show(req, res) {
        const idProduct = req.params.id;

        const product = await Product.findOne({
            where: { id: idProduct, user_id: req.userId },
            attributes: ['id', 'name', 'description', 'price'],
        });

        if (!product) {
            return res.status(400).json({ error: 'produto não encontrado' });
        }

        return res.json(product);
    }

    async update(req, res) {
        const idProduct = req.params.id;

        const { name, description, price } = req.body;

        const product = await Product.findOne({
            where: { id: idProduct, user_id: req.userId },
        });

        if (!product) {
            return res.status(400).json({ error: 'produto não encontrado' });
        }

        await product.update({
            name,
            description,
            price,
            where: { id: idProduct },
        });

        return res.json({ name, description, price });
    }

    async delete(req, res) {
        const idProduct = req.params.id;

        const product = await Product.findOne({
            where: { id: idProduct, user_id: req.userId },
        });

        if (!product) {
            return res.status(400).json({ error: 'produto não encontrado' });
        }

        await product.destroy(idProduct);

        return res.status(204).json(product);
    }
}

export default new ItemController();
