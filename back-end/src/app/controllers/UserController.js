import User from '../models/User';

class UserController {
    async store(req, res) {
        const emailExist = await User.findOne({
            where: { email: req.body.email },
        });

        if (emailExist) {
            return res.status(400).json({ error: 'Email existente' });
        }

        const cnpjExist = await User.findOne({
            where: { cnpj: req.body.cnpj },
        });

        if (cnpjExist) {
            return res.status(400).json({ error: 'CNPJ existente' });
        }

        const { id, name, email, cnpj } = await User.create(req.body);

        return res.json({ id, name, cnpj, email });
    }
}

export default new UserController();
