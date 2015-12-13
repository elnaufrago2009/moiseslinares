app.factory('precios', function(){
	var precios = [
		{
			title: 'Economic',
			pregunta_1: 'pregunta 1',
			pregunta_2: 'pregunta 2',
			pregunta_3: 'pregunta 3',
			pregunta_4: 'pregunta 4',
			pregunta_5: 'pregunta 5',
			respuesta_1: 'respuesta 1',
			respuesta_2: 'respuesta 2',
			respuesta_3: 'respuesta 3',
			respuesta_4: 'respuesta 4',
			respuesta_5: 'respuesta 5'
		},
		{
			title: 'Normal',
			pregunta_1: 'pregunta 1',
			pregunta_2: 'pregunta 2',
			pregunta_3: 'pregunta 3',
			pregunta_4: 'pregunta 4',
			pregunta_5: 'pregunta 5',
			respuesta_1: 'respuesta 1',
			respuesta_2: 'respuesta 2',
			respuesta_3: 'respuesta 3',
			respuesta_4: 'respuesta 4',
			respuesta_5: 'respuesta 5'
		},
		{
			title: 'Premium',
			pregunta_1: 'pregunta 1',
			pregunta_2: 'pregunta 2',
			pregunta_3: 'pregunta 3',
			pregunta_4: 'pregunta 4',
			pregunta_5: 'pregunta 5',
			respuesta_1: 'respuesta 1',
			respuesta_2: 'respuesta 2',
			respuesta_3: 'respuesta 3',
			respuesta_4: 'respuesta 4',
			respuesta_5: 'respuesta 5'
		}
		
	];

	var options = {
		getAll: function(){
			return precios;
		},
		add: function(precio){
			precios.push(precio);
		},
		show: function(){

		},
		edit: function(precio){

		},
		delete: function(precio){

		}
	};

	return options;

});


app.controller('preciosController', function($scope, precios, $uibModal){
	
	$scope.precios = precios.getAll();

	// modal show
	$scope.openShow = function(precio){
		var precioShow = $uibModal.open({
			templateUrl: 	'app/precios/show.html',
			controller: 	'preciosShowController',
			size: 			'lg',
			resolve: {
				precio: function(){
					return precio;
				}
			}
		});
	};

});

app.controller('preciosAdminController', function($scope, precios, $uibModal){

	$scope.precios = precios.getAll();

	// modal new
	$scope.openNew = function(){
		var precioNew = $uibModal.open({
			templateUrl: 	'app/precios/new.html',
			controller: 	'preciosNewController',
			size: 			'lg'
		});

		precioNew.result.then(function(precio){
			precios.add(precio);
			//console.log(cv);
		});
	};

	// modal show
	$scope.openShow = function(precio){
		var precioShow = $uibModal.open({
			templateUrl: 	'app/precios/show.html',
			controller: 	'preciosShowController',
			size: 			'lg',
			resolve: {
				precio: function(){
					return precio;
				}
			}
		});
	};

	// modal edit
	$scope.openEdit = function(precio){
		var precioEdit = $uibModal.open({
			templateUrl: 'app/precios/edit.html',
			controller: 'preciosEditController',
			size: 'lg',
			resolve: {
				precio: function(){
					return precio;
				}
			}
		});		
		precioEdit.result.then(function(precio){
			precios.edit(precio);
		});
	};
		
	// modal delete
	$scope.openDelete = function(precio){
		var precioDelete = $uibModal.open({
			templateUrl: 	'app/precios/delete.html',
			controller: 	'preciosDeleteController',
			size: 			'lg',
			resolve: {
				precio: function(){
					return precio;
				}
			}
		});
		precioDelete.result.then(function(precio){
			precios.delete(precio);
		});
	};
});


// Controller New
app.controller('preciosNewController',function($scope, $uibModalInstance){
	$scope.add = function(){
		$uibModalInstance.close($scope.precio);
	}

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
});

// Controller Show
app.controller('preciosShowController', function($scope, $uibModalInstance, precio){
	$scope.precio = precio;

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});

// Controller Edit
app.controller('preciosEditController', function($scope, $uibModalInstance, precio){
	$scope.precio = precio;

	$scope.edit = function(){
		$uibModalInstance.close($scope.precio);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});

// Controller Delete
app.controller('preciosDeleteController', function($scope, $uibModalInstance, precio){
	$scope.precio = precio;

	$scope.delete = function(){
		$uibModalInstance.close($scope.precio);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});