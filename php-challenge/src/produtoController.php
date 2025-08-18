<?php
class ProdutoController {
    private $pdo;
    public function __construct($pdo) { $this->pdo = $pdo; }

    public function criar($nome, $preco, $descricao) {
        $stmt = $this->pdo->prepare("INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)");
        $stmt->execute([$nome, $preco, $descricao]);
        return ["mensagem" => "Produto criado"];
    }

    public function listar() {
        $stmt = $this->pdo->query("SELECT * FROM produtos");
        return $stmt->fetchAll();
    }
}
