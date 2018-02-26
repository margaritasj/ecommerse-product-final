var products = (function () {

	return {

		searchApi = function () {
			/* Metodo Ajax (es configurado a través de un objeto,) -- 3 principales parametros*/
			$.ajax({
				type: 'GET', // especifica si será una petición POST o GET
				url: 'https://api.mercadolibre.com/categories/MPE1430', // la URL para la petición
				success: function (res) {
					console.log(res);
				},
			});
		}

	}

})();