app.factory('blogFactory', function(){
    var blogs = [
                    {
                        title:          'Primer titulo de la noticia uno',
                        categoria:      "AngularJs", 
                        description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
                        contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
                    },
                    {
                        title:          'Segundo Post Sobre Angular ',
                        categoria:      'Ruby on Rails',
                        description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
                        contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
                    },
                    {
                        title:          'Segundo Post Sobre Angular ',
                        categoria:      'Ionic',
                        description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
                        contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
                    },
                    {
                        title:          'Segundo Post Sobre Angular ',
                        categoria:      'AngularJs',
                        description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
                        contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
                    }
                ];
    var dataOption = {
        getBlogs: function(){
            return blogs;
        },
        newBlog: function(blog){
            blogs.push(blog);
        },
        editBlog: function(blog){

        },
        deleteBlog: function(index){
            //blogs.split(1,index);
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    return dataOption;
});


app.controller('blogController', function($scope, blogFactory){
	$scope.blogs = blogFactory.getBlogs();
});

app.controller('blogDetalleController', function($scope){
    
});

app.controller('blogAdminController', function($scope, $uibModal, blogFactory){

    $scope.blogs = blogFactory.getBlogs();

    // modal New
    $scope.open = function () {
        var blogNew = $uibModal.open({          
          templateUrl: 'app/blog/modal_new.html',
          controller: 'ModalBlogNewController',
          size: 'lg'
        });

        blogNew.result.then(function (blog) {
          blogFactory.newBlog(blog);
          console.log(blog);
        });
    };

    // modal show
    $scope.openShow = function(blog){
        var openInstanceShow = $uibModal.open({
            templateUrl:    'app/blog/modal_show.html',
            controller:     'blogModalShowController',
            size:           'lg',
            resolve:        {
                blog: function(){
                    return blog;
                }
            }
        });
    }

    // modal edit
    $scope.openEdit = function(blog){
        var openInstanceEdit = $uibModal.open({
            templateUrl:    'app/blog/modal_edit.html',
            controller:     'blogModalEditController',
            size:           'lg',
            resolve:        {
                blog: function(){
                    return blog;
                }
            }
        });

        openInstanceEdit.result.then(function(blog){
            console.log('Contruyendo la funcion Guardar');
        });
    }

    // modal delete 
    $scope.openDelete = function(blog, index){
        var openInstanceDelete = $uibModal.open({
            templateUrl:    'app/blog/modal_delete.html',
            controller:     'blogModalDeleteController',
            size:           'lg',
            resolve:        {
                blog: function(){
                    return blog;
                },
                index: function(){
                    return index;
                }
            }
        });

        openInstanceDelete.result.then(function(index){
            blogFactory.deleteBlog(index);
            console.log('Contruyendo Eliminando Blog');
        });
    }
});

// Controller Blog Modal New
app.controller('ModalBlogNewController', function($scope, $uibModalInstance) {

  $scope.guardar = function () {
    $uibModalInstance.close($scope.blog);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Controller Blog Modal Show
app.controller('blogModalShowController', function($scope, $uibModalInstance, blog){

    $scope.blog = blog;

    $scope.cerrar = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

// Controller Blog Modal Edit
app.controller('blogModalEditController', function($scope, $uibModalInstance, blog){
    $scope.blog = blog;

    $scope.edit = function(){
        $uibModalInstance.close($scope.blog);
    };

    $scope.cerrar = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

// Controller Blog Modal Delete
app.controller('blogModalDeleteController', function($scope, $uibModalInstance, blog, index){

    // parsing variables modal
    $scope.blog = blog;
    $scope.index = index;

    $scope.delete = function(){
        $uibModalInstance.close($scope.blog);
    };

    $scope.cerrar = function () {
        $uibModalInstance.dismiss('cancel');
    };
});