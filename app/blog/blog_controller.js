app.controller('blogController', function($scope){
	$scope.blogs = [
        {
            title:          'Primer titulo de la noticia uno', 
            description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
            contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
        },
        {
            title:          'Segundo Post Sobre Angular ',
            description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
            contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
        },
        {
            title:          'Segundo Post Sobre Angular ',
            description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
            contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
        },
        {
            title:          'Segundo Post Sobre Angular ',
            description:    'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.',
            contenido:      'Este es el contenido de la noticia numero uno y vamos a ver que tal funciona en la vista y las otras                             vistas, ademas de esto tambien es un texto de ejemplo para ver como se ven en todo el ancho de la                                 pagina y ver tambien el performance de angularjs.'
        }
    ];
});

app.controller('blogDetalleController', function($scope){
    
});

app.controller('blogAdminController', function($scope, $uibModal){
    
});