<?php
header('Content-Type: application/json; charset=utf-8');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/config.php';
require_once __DIR__ . '/../src/UsuarioController.php';
require_once __DIR__ . '/../src/ProdutoController.php';
require_once __DIR__ . '/../src/VendaController.php';
require_once __DIR__ . '/../src/VendaItemController.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function resposta($dados, $codigo = 200) {
    http_response_code($codigo);
    if ($dados !== null) echo json_encode($dados);
    exit;
}

function obterJson() {
    $body = file_get_contents('php://input');
    return $body ? json_decode($body, true) : [];
}

function cabecalhoAuthorization() {
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) return trim($_SERVER['HTTP_AUTHORIZATION']);
    if (function_exists('getallheaders')) {
        $h = getallheaders();
        if (!empty($h['Authorization'])) return trim($h['Authorization']);
        if (!empty($h['authorization'])) return trim($h['authorization']);
    }
    return null;
}

function autenticarOuAbortar($jwt_secreto) {
    $auth = cabecalhoAuthorization();
    if (!$auth) resposta(['erro' => 'Token não informado'], 401);
    $token = str_replace('Bearer ', '', $auth);
    try {
        $dec = JWT::decode($token, new Key($jwt_secreto, 'HS256'));
        return $dec; 
    } catch (Exception $e) {
        resposta(['erro' => 'Token inválido ou expirado'], 401);
    }
}

$usuarioCtrl = new UsuarioController($pdo, $jwt_secreto ?? null);
$produtoCtrl = new ProdutoController($pdo);
$vendaCtrl = new VendaController($pdo);
$itemCtrl = new VendaItemController($pdo);

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$rota = explode('/', trim($uri, '/'));
$metodo = $_SERVER['REQUEST_METHOD'];

if ($rota[0] === '' || $rota[0] === 'index.php') {
    resposta(['mensagem' => 'API de Vendas - OK']);
}

if ($rota[0] === 'usuarios' && $metodo === 'POST' && count($rota) === 1) {
    $d = obterJson();
    if (empty($d['nome']) || empty($d['email']) || empty($d['senha'])) {
        resposta(['erro' => 'nome, email e senha são obrigatórios'], 400);
    }
    try {
        $res = $usuarioCtrl->registrar($d['nome'], $d['email'], $d['senha']);
        resposta($res, 201);
    } catch (Exception $e) {
        resposta(['erro' => $e->getMessage()], 400);
    }
}

if ($rota[0] === 'login' && $metodo === 'POST') {
    $d = obterJson();
    if (empty($d['email']) || empty($d['senha'])) resposta(['erro' => 'email e senha obrigatórios'], 400);
    $res = $usuarioCtrl->login($d['email'], $d['senha']);
    if (isset($res['erro'])) resposta($res, 401);
    resposta($res);
}

if ($rota[0] === 'produtos' && $metodo === 'GET' && count($rota) === 1) {
    $res = $produtoCtrl->listar();
    resposta($res);
}

if ($rota[0] === 'produtos' && $metodo === 'POST' && count($rota) === 1) {
    $user = autenticarOuAbortar($jwt_secreto);
    $d = obterJson();

    if (empty($d['nome']) || !isset($d['preco'])) {
        resposta(['erro' => 'nome e preco obrigatórios'], 400);
        exit;
    }
    $res = $produtoCtrl->criar(
        $d['nome'],
        $d['preco'],
        $d['descricao'] ?? null,
    );
    resposta(['sucess' => 'Produto criado com sucesso!'], 200);

}

if ($rota[0] === 'vendas' && $metodo === 'GET' && count($rota) === 1) {
    autenticarOuAbortar($jwt_secreto);
    $res = $vendaCtrl->listar();
    resposta($res);
}

if ($rota[0] === 'vendas' && $metodo === 'GET' && count($rota) === 2) {
    autenticarOuAbortar($jwt_secreto);
    $id = (int)$rota[1];
    $res = $vendaCtrl->detalhes($id);
    if (!$res['venda']) {
        resposta(['erro' => 'Venda não encontrada'], 404);
    }
    resposta($res);
}

if ($rota[0] === 'vendas' && $metodo === 'POST' && count($rota) === 1) {
    autenticarOuAbortar($jwt_secreto);
    $d = obterJson();

    if (empty($d['nome_cliente']) || empty($d['email'])) {
        resposta(['erro' => 'nome_cliente e email são obrigatórios'], 400);
    }

    $telefone = $d['telefone'] ?? null;
    $endereco = $d['endereco'] ?? null;
    $desconto = $d['desconto_percentual'] ?? 0;

    $res = $vendaCtrl->criar($d['nome_cliente'], $telefone, $d['email'], $endereco, $desconto);
    resposta($res, 201);
}

if ($rota[0] === 'vendas' && $metodo === 'DELETE' && count($rota) === 2) {
    autenticarOuAbortar($jwt_secreto);
    $id = (int)$rota[1];
    $res = $vendaCtrl->excluir($id);
    resposta($res);
}

if ($rota[0] === 'vendas' && $metodo === 'POST' && count($rota) === 3 && $rota[2] === 'itens') {
    autenticarOuAbortar($jwt_secreto);
    $venda_id = (int)$rota[1];
    $d = obterJson();

    if (empty($d['produto_id']) || !isset($d['quantidade']) || !isset($d['preco_unitario'])) {
        resposta(['erro' => 'produto_id, quantidade e preco_unitario são obrigatórios'], 400);
    }

    $res = $itemCtrl->adicionar($venda_id, $d['produto_id'], $d['quantidade'], $d['preco_unitario']);
    resposta($res, 201);
}

if ($rota[0] === 'vendas' && $metodo === 'PUT' && count($rota) === 4 && $rota[2] === 'itens') {
    autenticarOuAbortar($jwt_secreto);
    $itemId = (int)$rota[3];
    $d = obterJson();

    if (!isset($d['quantidade']) || !isset($d['preco_unitario'])) {
        resposta(['erro' => 'quantidade e preco_unitario são obrigatórios'], 400);
    }

    $res = $itemCtrl->atualizar($itemId, $d['quantidade'], $d['preco_unitario']);
    resposta($res);
}

if ($rota[0] === 'vendas' && $metodo === 'DELETE' && count($rota) === 4 && $rota[2] === 'itens') {
    autenticarOuAbortar($jwt_secreto);
    $itemId = (int)$rota[3];
    $res = $itemCtrl->excluir($itemId);
    resposta($res);
}
