var app = angular.module('webApp', ['ngGrid']);
app.controller('inicioController', ['$scope', function($scope){
	$scope.nombre = 'diego';
	$scope.docentes = [
		{nombre:"diego atayra", telefono:"351-743-0004", domicilio: "27 de abril 2470 dto 3"},
		{nombre:"leticia gentilini", telefono:"351-653-4422", domicilio: "dean funes 3244"},
		{nombre:"ariel llanos", telefono:"3541-755-444", domicilio: "9 de julio 2331"},
		{nombre:"graciela suarez", telefono:"351-763-3224", domicilio: "leon pinelo 423"},
		{nombre:"martin gallardo", telefono:"351-766-1940", domicilio: "colon 4552"},
		{nombre:"carlo sanchez", telefono:"351-766-3321", domicilio: "enfermera clermond 322"},		
	];
	$scope.gridOptions = {data:'docentes'};
}])