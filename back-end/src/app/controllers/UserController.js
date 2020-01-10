import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExist = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExist) {
            return res.status(400).json({ error: 'Email existente' });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({ id, name, email });
    }

    async update(req, res) {
        return res.json(req.userId);
    }
}

export default new UserController();
