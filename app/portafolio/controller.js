app.factory('portafolios', function($firebaseArray){
	var portafoliosRef = new Firebase('https://moiseslinares.firebaseio.com/portafolios');
	var portafolios = $firebaseArray(portafoliosRef);
	var options = {
		getAll: function(){
			return portafolios;
		},
		add: function(portafolio){
			portafolios.$add(portafolio);
		},
		show: function(){

		},
		edit: function(portafolio){
			portafolios.$save(portafolio);
		},
		delete: function(portafolio){
			portafolios.$remove(portafolio);
		}
	};

	return options;

});

app.controller('portafoliosController', function($scope, portafolios, $uibModal){

	$scope.portafolios = portafolios.getAll();

	// modal show
	$scope.openView = function(portafolio){
		var portafolioView = $uibModal.open({
			templateUrl: 	'app/portafolio/view.html',
			controller: 	'portafoliosViewController',
			size: 			'lg',
			resolve: {
				portafolio: function(){
					return portafolio;
				}
			}
		});
	};

});


app.controller('portafoliosAdminController', function($scope, portafolios, $uibModal){

	$scope.portafolios = portafolios.getAll();

	// modal new
	$scope.openNew = function(){
		var portafolioNew = $uibModal.open({
			templateUrl: 	'app/portafolio/new.html',
			controller: 	'portafoliosNewController',
			size: 			'lg'
		});

		portafolioNew.result.then(function(portafolio){
			portafolios.add(portafolio);
			//console.log(cv);
		});
	};

	// modal view
	$scope.openView = function(portafolio){
		var portafolioView = $uibModal.open({
			templateUrl: 	'app/portafolio/view.html',
			controller: 	'portafoliosViewController',
			size: 			'lg',
			resolve: {
				portafolio: function(){
					return portafolio;
				}
			}
		});
	};

	// modal edit
	$scope.openEdit = function(portafolio){
		var portafolioEdit = $uibModal.open({
			templateUrl: 'app/portafolio/edit.html',
			controller: 'portafoliosEditController',
			size: 'lg',
			resolve: {
				portafolio: function(){
					return portafolio;
				}
			}
		});		
		portafolioEdit.result.then(function(portafolio){
			portafolios.edit(portafolio);
		});
	};
		
	// modal delete
	$scope.openDelete = function(portafolio){
		var portafolioDelete = $uibModal.open({
			templateUrl: 	'app/portafolio/delete.html',
			controller: 	'portafoliosDeleteController',
			size: 			'lg',
			resolve: {
				portafolio: function(){
					return portafolio;
				}
			}
		});
		portafolioDelete.result.then(function(portafolio){
			portafolios.delete(portafolio);
		});
	};

	
});


// Controller New
app.controller('portafoliosNewController',function($scope, $uibModalInstance, Upload, $timeout, $location){

	$scope.portafolio = [];
	$scope.portafolio.images = [];
	$scope.archivos = [];

	$scope.agregar_fotos = function(fotos){
		angular.forEach(fotos, function(foto){

			var diferente = true;

			angular.forEach($scope.archivos, function(foto_tmp){
				if(foto.name == foto_tmp.name){
					diferente = false;
				}
			});
			
			if(diferente==true){

				var nombre_temp = 'portafolio/' + $scope.portafolio.title.replace(/[^A-Za-z0-9]/g, '-')  + '/'  + foto.name.replace(/[^A-Za-z0-9\.]/g, '-');
			    
			    foto.upload = Upload.upload({
				    url: 'https://moiseslinares.s3.amazonaws.com/',
				    method: 'POST',
				    data: {
				        key: nombre_temp,
				        AWSAccessKeyId: 'AKIAJIHQHU5IPXHAOJJQ',
				        acl: 'public-read', 
				        policy: 'ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogImthdHVxIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwdWJsaWMtcmVhZCJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgIiJdLAogICAgWyJzdGFydHMtd2l0aCIsICIkZmlsZW5hbWUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgNTI0Mjg4MDAwXQogIF0KfQ==',
				        signature: 'gSXOy3Ec0im5Kbjptud03yGwUv0=',
				        "Content-Type": foto.type != '' ? foto.type : 'application/octet-stream', 
				        filename: foto.name, 
				        file: foto
				    }
				});

				foto.upload.then(function (response) {
	                $timeout(function () {
	                    foto.result = response.data;
	                });
	            }, function (response) {
	                if (response.status > 0)
	                    $scope.errorMsg = response.status + ': ' + response.data;
	            }, function (evt) {
	                foto.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });	


				$scope.portafolio.images.push(nombre_temp);
				$scope.archivos.push(foto);				
				
			}
		});		
	}

	$scope.eliminar_archivo = function(index){
		$scope.portafolio.images.splice(index, 1);
		$scope.archivos.splice(index, 1);
	}

	$scope.add = function(){
		$uibModalInstance.close($scope.portafolio);
	}

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
});

// Controller Show
app.controller('portafoliosViewController', function($scope, $uibModalInstance, portafolio){
	$scope.portafolio = portafolio;

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});

// Controller Edit
app.controller('portafoliosEditController', function($scope, $uibModalInstance, portafolio){
	$scope.portafolio = portafolio;

	$scope.edit = function(){
		$uibModalInstance.close($scope.portafolio);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});

// Controller Delete
app.controller('portafoliosDeleteController', function($scope, $uibModalInstance, portafolio){
	$scope.portafolio = portafolio;

	$scope.delete = function(){
		$uibModalInstance.close($scope.portafolio);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});