<!DOCTYPE html>
<html lang="en">
<head>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    
    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    <?php echo e(Html::script('js/core-js/client/shim.min.js')); ?>

    <?php echo e(Html::script('js/zone.js/dist/zone.js')); ?>

    <?php echo e(Html::script('js/reflect-metadata/Reflect.js')); ?>

    <?php echo e(Html::script('js/systemjs/dist/system.src.js')); ?>

    <?php echo e(Html::script('systemjs.config.js')); ?>


    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>

<!-- Styles -->
<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }

</style>
    
</head>
<body>
    <my-app>Loading...</my-app>
    <div class="flex-center position-ref full-height">
        

        <div class="content">
            <div class="title m-b-md">
                Laravel
            </div>
        </div>
    </div>
</body>
</html>
