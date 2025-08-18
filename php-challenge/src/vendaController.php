<?php
class VendaController {
    private $pdo;
    public function __construct($pdo) { $this->pdo = $pdo; }

    public function criar($nome_cliente, $telefone, $email, $endereco, $desconto_percentual) {
        $stmt = $this->pdo->prepare("INSERT INTO vendas (nome_cliente, telefone, email, endereco, desconto_percentual) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$nome_cliente, $telefone, $email, $endereco, $desconto_percentual]);
        return ["mensagem" => "Venda registrada", "venda_id" => $this->pdo->lastInsertId()];
    }

    public function listar() {
        $stmt = $this->pdo->query("
            SELECT v.id, v.nome_cliente, 
                   SUM(vi.quantidade * vi.preco_unitario) * (1 - v.desconto_percentual/100) AS total
            FROM vendas v
            LEFT JOIN venda_itens vi ON v.id = vi.venda_id
            GROUP BY v.id
        ");
        return $stmt->fetchAll();
    }

    public function detalhes($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM vendas WHERE id = ?");
        $stmt->execute([$id]);
        $venda = $stmt->fetch();

        $stmtItens = $this->pdo->prepare("
            SELECT vi.*, p.nome AS nome_produto 
            FROM venda_itens vi
            JOIN produtos p ON vi.produto_id = p.id
            WHERE venda_id = ?
        ");
        $stmtItens->execute([$id]);
        $itens = $stmtItens->fetchAll();

        return ["venda" => $venda, "itens" => $itens];
    }

    public function excluir($id) {
        $stmt = $this->pdo->prepare("DELETE FROM vendas WHERE id = ?");
        $stmt->execute([$id]);
        return ["mensagem" => "Venda excluída"];
    }
}
