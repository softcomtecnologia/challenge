import db from "../models/index.js";
const User = db.user;

export const allAccess = (req, res) => {
    res.status(200).send("Página pública.");
};
 
export const userBoard = (req, res) => {
    res.status(200).send("Página que o usário comum pode acessar.");
};
 
export const adminBoard = (req, res) => {
    res.status(200).send("Página que o usuário administrador pode acessar.");
};
 
export const moderatorBoard = (req, res) => {
    res.status(200).send("Página que o usuário moderador pode acessar.");
};

export const userFindById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.id }
        });

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuário" });
    }
};
