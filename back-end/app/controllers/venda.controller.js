import db from "../models/index.js";
import { calcularTotalVenda } from "../util/utils.js";
const Venda = db.venda; 
const Item = db.item; 

export const create = async (req, res) => {
    try {
        const { formaPagamento, itens } = req.body;
        const userId = req.userId;

        if (!itens || itens.length === 0) {
            return res.status(400).json({ message: "Nenhum item fornecido" });
        }

        const enviadosIds = itens.map(i => i.id);

        const itensExistentes = await Item.findAll({
            where: { id: enviadosIds }
        });

        if (itensExistentes.length !== enviadosIds.length) {
            const encontradosIds = itensExistentes.map(i => i.id);
            const inexistentes = enviadosIds.filter(id => !encontradosIds.includes(id));
            return res.status(400).json({ message: `Itens não encontrados: ${inexistentes.join(", ")}` });
        }

        const total = calcularTotalVenda(itensExistentes.map(item => ({
            ...item.dataValues,
            quantidade: itens.find(i => i.id === item.id).quantidade
        })), formaPagamento);


        const novaVenda = await Venda.create({ total, formaPagamento, userId });

        for (const item of itensExistentes) {
            const quantidade = itens.find(i => i.id === item.id).quantidade || 1;
            await novaVenda.addItem(item, { through: { quantidade } });
        }

        res.status(201).json({ message: "Venda criada com sucesso", venda: novaVenda });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar venda" });
    }
};


export const findAll = async (req, res) => {
    try {
        const vendas = await Venda.findAll({
            where: { userId: req.userId }
        });

        res.status(200).json(vendas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar vendas" });
    }
};
