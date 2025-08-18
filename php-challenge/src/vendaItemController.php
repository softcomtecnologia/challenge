<?php
class VendaItemController {
    private $pdo;
    public function __construct($pdo) { $this->pdo = $pdo; }

    public function adicionar($venda_id, $produto_id, $quantidade, $preco_unitario) {
        $stmt = $this->pdo->prepare("INSERT INTO venda_itens (venda_id, produto_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)");
        $stmt->execute([$venda_id, $produto_id, $quantidade, $preco_unitario]);
        return ["mensagem" => "Item adicionado"];
    }

    public function atualizar($id, $quantidade, $preco_unitario) {
        $stmt = $this->pdo->prepare("UPDATE venda_itens SET quantidade = ?, preco_unitario = ? WHERE id = ?");
        $stmt->execute([$quantidade, $preco_unitario, $id]);
        return ["mensagem" => "Item atualizado"];
    }

    public function excluir($id) {
        $stmt = $this->pdo->prepare("DELETE FROM venda_itens WHERE id = ?");
        $stmt->execute([$id]);
        return ["mensagem" => "Item excluído"];
    }
}
