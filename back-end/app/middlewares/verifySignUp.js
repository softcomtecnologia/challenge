import db from "../models/index.js";
 
const { ROLES, user: User } = db;
 
export const checkDuplicateUsernameOrEmailOrCnpj = async (req, res, next) => {
    try {
        const userByUsername = await User.findOne({
            where: { username: req.body.username },
        });
        if (userByUsername) {
            return res.status(400).json({ message: "Nome de usuário já cadastrado!" });
        }
 
        const userByEmail = await User.findOne({
            where: { email: req.body.email },
        });
        if (userByEmail) {
            return res.status(400).json({ message: "E-mail já cadastrado!" });
        }

        const userByCnpj = await User.findOne({
            where: { cnpj: req.body.cnpj },
        });
        if (userByCnpj) {
            return res.status(400).json({ message: "CNPJ já cadastrado!" });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (const role of req.body.roles) {
            if (!ROLES.includes(role)) {
                return res.status(400).json({ message: `Função: ${role} não existe!` });
            }
        }
    }
    next();
};