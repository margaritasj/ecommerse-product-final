// factory es una funcionalidad de angular que mas se adapta para usar varias funciones de una sola entidad
app.factory("productModel", function ($http, $q) {
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
        },
        
        find: function ( name ) {
            var deferred = $q.defer();
            $http.get('https://api.mercadolibre.com/sites/MPE/search?q='+ name +'&limit=10')
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (response) {
                    deferred.reject(response);
                });
            return deferred.promise; // Retorna sea datisfactorio o erroneo
        },
        findDetails: function ( id ) {
            var deferred = $q.defer();
            $http.get('https://api.mercadolibre.com/categories/'+id)
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