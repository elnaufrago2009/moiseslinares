var app = angular.module("weperu", ['ngRoute','ui.bootstrap', 'firebase', 'ngFileUpload']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: "app/home/home_index.html",
		controller: "homeController"
	})
	.when('/precios', {
		templateUrl: "app/precios/index.html",
		controller: "preciosController"
	})
	.when('/precios_admin', {
		templateUrl: "app/precios/admin.html",
		controller: "preciosAdminController"
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
	.when('/cv', {
		templateUrl: "app/cv/index.html",
		controller: "cvController"
	})
	.when('/cv_admin', {
		templateUrl: "app/cv/admin.html",
		controller: "cvAdminController"
	})
	.when('/portafolio', {
		templateUrl: "app/portafolio/index.html",
		controller: "portafoliosController"
	})
	.when('/portafolio_admin', {
		templateUrl: "app/portafolio/admin.html",
		controller: "portafoliosAdminController"
	})
	.otherwise({ redirectTo: '/' })
});