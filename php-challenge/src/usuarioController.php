<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/config.php';

use Firebase\JWT\JWT;

class UsuarioController {
    private $pdo;
    private $jwt_secreto = "minhachavesecreta";

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function registrar($nome, $email, $senha) {
        $hash = password_hash($senha, PASSWORD_BCRYPT);
        $stmt = $this->pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
        $stmt->execute([$nome, $email, $hash]);
        return ["mensagem" => "Usuário registrado com sucesso"];
    }

    public function login($email, $senha) {
        $stmt = $this->pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        $usuario = $stmt->fetch();

        if ($usuario && password_verify($senha, $usuario['senha'])) {
            $payload = [
                'iss' => "http://localhost",
                'iat' => time(),
                'exp' => time() + 3600,
                'usuario_id' => $usuario['id']
            ];
            $jwt = JWT::encode($payload, $this->jwt_secreto, 'HS256');
            return ["token" => $jwt];
        }
        return ["erro" => "Credenciais inválidas"];
    }
}
