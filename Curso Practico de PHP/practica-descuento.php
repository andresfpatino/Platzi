<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descuentos 35%</title>

    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 15px;
        }
        h1 {
            text-align: center;
        }
        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 4em 0
        }
        .container {
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
            padding: 0 16px;
        }
        .col-md-4 {
            width: calc(33.333% - 40px);
            text-align: center;
            border: 2px solid whitesmoke;
            margin: 10px 20px;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    
<?php
    function descuento ($total) {
        return round((35 * $total) / 100);
    }

    class Product {
        public $name;
        public $price;

        public function __construct($name, $price) {
            $this->name = $name;
            $this->price = $price;
        }
    }

    $products = [
        new Product("Iphone 11", 5_000_000),
        new Product("Iphone 11 Pro", 10_000_000),
        new Product("Iphone 11 Pro Max", 15_000_000),
        new Product("Iphone 11 Pro Max 2", 20_000_000),
        new Product("Iphone 11 Pro Max 3", 25_000_000),
        new Product("Iphone 11 Pro Max 4", 30_000_000),
    ];
?>

<div class="container">
    <h1> Todos los productos con el 35% dcto. </h1>
    <div class="row">        
        <?php foreach ($products as $product) : 
            $dcto = descuento($product->price);
            $total = $product->price - $dcto; ?>
            <div class="col-md-4">
                <h3><?= $product->name ?></h3>
                <p>Precio: <del><?= $product->price ?></del> </p>
                <p>Descuento: <?= $dcto ?> </p>
                <p>Precio con descuento: <?= $total ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</div>



</body>
</html>


