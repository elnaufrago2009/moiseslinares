var app = angular.module("weperu", ['ngRoute','ui.bootstrap', 'firebase']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: "app/home/home_index.html",
		controller: "homeController"
	})
	.when('/precios', {
		templateUrl: "app/precios/precios_index.html",
		controller: "preciosController"
	})
	.when('/blog', {
		templateUrl: "app/blog/blog_index.html",
		controller: "blogController"
	})
    .when('/blog_detalle', {
        templateUrl: "app/blog/blog_detalle.html",
        controller: "blogDetalleController"
    })
    .when('/blog_admin_index', {
        templateUrl: "app/blog/blog_admin_index.html",
        controller: "blogAdminController"
    })
	.when('/team', {
		templateUrl: "app/team/team_index.html",
		controller: "teamController"
	})
	.when('/portafolio', {
		templateUrl: "app/portafolio/portafolio_index.html",
		controller: "portafolioController"
	})
	.otherwise({ redirectTo: '/' })
});