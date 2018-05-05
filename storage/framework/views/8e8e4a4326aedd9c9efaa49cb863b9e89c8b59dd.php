<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="resumo">
        <meta name="author" content="Jean L. Zanatta">

        <title>Business Saga - Primeiro acesso</title>
    </head>
    <body>
        <h1>Bem-vindo <?php echo e($usuario->nome); ?> !!!</h1>

        <h3>Você foi cadastrado(a) no jogo Business Saga e está vinculado à empresa <?php echo e($empresa->razao_social); ?>.</h3>
        <h3>Por medidas de segurança,</h3>
        <h4>solicitamos que realize o primeiro acesso ao sistema <a href="<?php echo e(config('app.url')); ?>/cadastrar/<?php echo e($usuario->email); ?>/<?php echo e($usuario->confirm_token); ?>">clicando aqui</a> e cadastre sua senha.</h4>
    </body>
</html>