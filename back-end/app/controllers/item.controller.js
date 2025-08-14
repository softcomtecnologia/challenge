import db from "../models/index.js";

const Item = db.item;

export const itensList = async (req, res) => {
    try {
        const itens = await Item.findAll({
            where: { userId: req.userId }
        });
        res.status(200).json(itens);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar itens" });
    }
};

export const itemFindById = async (req, res) => {
    try {
        const item = await Item.findOne({
            where: { id: req.params.id, userId: req.userId }
        });

        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar item" });
    }
};

export const itemCreate = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const novoItem = await Item.create({
            name,
            description,
            price,
            userId: req.userId
        });

        res.status(201).json(novoItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar item" });
    }
};

export const itemUpdate = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const item = await Item.findOne({
            where: { id: req.params.id, userId: req.userId }
        });

        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }

        await item.update({ name, description, price });

        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar item" });
    }
};

export const itemDelete = async (req, res) => {
    try {
        const item = await Item.findOne({
            where: { id: req.params.id, userId: req.userId }
        });

        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }

        await item.destroy();

        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar item" });
    }
};