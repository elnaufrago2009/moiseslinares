app.factory('cvs', function(){
	var cvs = [
		{
			title: 'Moises Linares',
			category: 'AngularJs',
			content: 'contenido de toda el curriculum vitae'
		},
		{
			title: 'Moises Linares',
			category: 'Ruby on Rails',
			content: 'contenido de todo el curriculum vitae'
		},
		{
			title: 'Moises Linares',
			category: 'Javascript',
			content: 'contenido de todo el curriculum vitae'
		}
	];

	var option = {
		get: function(){
			return cvs;
		},
		add: function(cv){
			cvs.push(cv);
		},
		show: function(){

		},
		edit: function(cv){

		},
		delete: function(cv){

		}
	}

	return option;
});


app.controller('cvController', function($scope, cvs, $uibModal){
	$scope.cvs = cvs.get();

	// modal show
	$scope.openShow = function(cv){
		var cvShow = $uibModal.open({
			templateUrl: 	'app/cv/show.html',
			controller: 	'cvShowController',
			size: 			'lg',
			resolve: {
				cv: function(){
					return cv;
				}
			}
		});
	};

});


// Admin
app.controller('cvAdminController', function($scope, cvs, $uibModal){
	$scope.cvs = cvs.get();

	// modal new
	$scope.openNew = function(){
		var cvNew = $uibModal.open({
			templateUrl: 	'app/cv/new.html',
			controller: 	'cvNewController',
			size: 			'lg'
		});

		cvNew.result.then(function(cv){
			cvs.add(cv);
			//console.log(cv);
		});
	};

	// modal show
	$scope.openShow = function(cv){
		var cvShow = $uibModal.open({
			templateUrl: 	'app/cv/show.html',
			controller: 	'cvShowController',
			size: 			'lg',
			resolve: {
				cv: function(){
					return cv;
				}
			}
		});
	};

	// modal edit
	$scope.openEdit = function(cv){
		var cvEdit = $uibModal.open({
			templateUrl: 'app/cv/edit.html',
			controller: 'cvEditController',
			size: 'lg',
			resolve: {
				cv: function(){
					return cv;
				}
			}
		});		
		cvEdit.result.then(function(cv){
			cvs.edit(cv);
		});
	};
		
	// modal delete
	$scope.openDelete = function(cv){
		var cvDelete = $uibModal.open({
			templateUrl: 	'app/cv/delete.html',
			controller: 	'cvDeleteController',
			size: 			'lg',
			resolve: {
				cv: function(){
					return cv;
				}
			}
		});
		cvDelete.result.then(function(cv){
			cvs.delete(cv);
		});
	};


});

// Controller New
app.controller('cvNewController',function($scope, $uibModalInstance){
	$scope.add = function(){
		$uibModalInstance.close($scope.cv);
	}

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
});

// Controller Show
app.controller('cvShowController', function($scope, $uibModalInstance, cv){
	$scope.cv = cv;

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});

// Controller Edit
app.controller('cvEditController', function($scope, $uibModalInstance, cv){
	$scope.cv = cv;

	$scope.edit = function(){
		$uibModalInstance.close($scope.cv);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});

// Controller Delete
app.controller('cvDeleteController', function($scope, $uibModalInstance, cv){
	$scope.cv = cv;

	$scope.delete = function(){
		$uibModalInstance.close($scope.cv);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});