<?php
require 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function autenticar() {
    $jwt_secreto = "minhachavesecreta";
    $headers = apache_request_headers();
    
    if (!isset($headers['Authorization'])) {
        http_response_code(401);
        echo json_encode(["erro" => "Token não fornecido"]);
        exit;
    }

    $token = str_replace('Bearer ', '', $headers['Authorization']);

    try {
        $decodificado = JWT::decode($token, new Key($jwt_secreto, 'HS256'));
        return $decodificado;
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(["erro" => "Token inválido"]);
        exit;
    }
}
