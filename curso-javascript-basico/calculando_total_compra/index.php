<!DOCTYPE html>
<html>
<head>
	<title>Calculando</title>
</head>
<body>

	<div class="panel-body">
		<img src="img/produtos/foto<?= $_POST["id"] ?>-<?= $_POST["cor"] ?> .png"
		class="img-thumbnail img-responsive">
		<dl>
			<dt>Produto</dt>
			<dd><?= $_POST["nome"] ?> </dd>
			<dt>Preço</dt>
			<dd><?= $_POST["preco"] ?> </dd>
			<dt>Cor</dt>
			<dd><?= $_POST["cor"] ?> </dd>
			<dt>Tamanho</dt>
			<dd><?= $_POST["tamanho"] ?> </dd>
		</dl>
		<!-- Aqui virá o código -->
	</div>

</body>
</html>