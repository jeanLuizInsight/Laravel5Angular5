<!DOCTYPE html>
<html lang="en">
<head>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ogochi - Solução completa em moda masculina</title>

    <!-- Fonts -->
    <link href="/css/app.css" rel="stylesheet" />
    
    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    <?php echo e(Html::script('js/core-js/client/shim.min.js')); ?>

    <?php echo e(Html::script('js/zone.js/dist/zone.js')); ?>

    <?php echo e(Html::script('js/reflect-metadata/Reflect.js')); ?>

    <?php echo e(Html::script('js/systemjs/dist/system.src.js')); ?>

    <?php echo e(Html::script('systemjs.config.js')); ?>


    <?php echo e(Html::script('js/jquery/jquery.js')); ?>

    <?php echo e(Html::script('js/bootstrap/bootstrap.js')); ?>


    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script> 
</head>

<body>
    <my-app>Carregando, por favor aguarde...</my-app>
</body>
</html>
