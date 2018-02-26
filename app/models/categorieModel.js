// factory es una funcionalidad de angular que mas se adapta para usar varias funciones de una sola entidad
app.factory("categorieModel", function ($http, $q) {
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    return {
        searchApi: function () {
            var deferred = $q.defer();
            $http.get('https://api.mercadolibre.com/categories/MPE1430')
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (response) {
                    deferred.reject(response);
                });
            return deferred.promise; // Retorna sea datisfactorio o erroneo
		}
    }
});