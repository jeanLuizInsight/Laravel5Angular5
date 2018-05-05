<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="resumo">
        <meta name="author" content="Jean L. Zanatta">

        <title>Business Saga - Recuperação de senha</title>
    </head>
    <body>
        <h1>Olá <?php echo e($usuario->nome); ?>!</h1>

        <h3>Recebemos uma solicitação de recuperação de senha de sua conta do Business Saga.</h3>
        <h3>Clique no botão a seguir para redefinir sua senha:</h3>
        <a href="<?php echo e(config('app.url')); ?>/redefinir/<?php echo e($usuario->email); ?>/<?php echo e($usuario->confirm_token); ?>">Redefinir senha</a>
    
        <br />
        <h3>Se você não quiser redefinir sua senha, basta ignorar e excluir esta mensagem.</h3>
    </body>
</html>