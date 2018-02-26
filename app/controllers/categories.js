// controller apunta a app
// $scope -> variable intermediaria entre el js y el front
app.controller('product', ['$scope', 'productModel', function ($scope, productModel) {

	productModel.searchApi().then(function (data) {
		console.log(data.children_categories);
		$scope.categories = data.children_categories;
	});
}]);