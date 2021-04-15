import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email(),
            cnpj: Yup.string(),
            password: Yup.string()
                .required()
                .min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de validação' });
        }

        const { email, cnpj, password } = req.body;

        const emailCnpj = {};

        if (cnpj) {
            emailCnpj.cnpj = cnpj;
        } else {
            emailCnpj.email = email;
        }

        if (!(email || cnpj)) {
            res.status(401).json({
                error: 'Para efetuar o login deve-se informar email ou CNPJ',
            });
        }

        const user = await User.findOne({ where: emailCnpj });

        if (!user) {
            res.status(401).json({ error: 'Usuário não encontrado' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha não correspondente' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            /**
             * o segundo será uma string unica, essa senha poderá ser gerada no  md5online
             * onde a senha criptografada será $%backDesafioSoftcom1.0
             */
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
