import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de validação' });
        }

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

    async show(req, res) {
        const idUser = req.params.id;

        const user = await User.findOne({
            where: { id: idUser },
            attributes: ['id', 'name', 'email', 'cnpj'],
        });

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        return res.json(user);
    }
}

export default new UserController();
