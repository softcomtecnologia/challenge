import * as Yup from 'yup';
import Product from '../models/Product';

class ItemController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required(),
            price: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de validação' });
        }

        const { name, description, price } = req.body;

        await Product.create({
            name,
            description,
            price,
            user_id: req.userId,
        });

        return res.json({ name, description, price });
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
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required(),
            price: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de validação' });
        }

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
