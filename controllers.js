
var Controllers = angular.module('Controllers', ['ngRoute']);


    Controllers.controller('myFirstCtrl', ['$scope', '$routeParams', '$anchorScroll',
     function ($scope, $routeParams, $anchorScroll) {
  $scope.items = [
    
    {"name" : "D3.js", "language": "Javascript","popular":"true","new":"false","real-time": "false",
"SVG":"true", "spatial": "true", "network": "true", "color":"true","data-focused":"true",
"financial-focused":"false", "image": "img/d3js.png"},

    {"name" : "Chroma.js", "language": "Javascript","popular":"true","new":"true","real-time": "false",
"SVG":"false", "spatial": "true", "network": "false", "color":"true","data-focused":"false",
"financial-focused":"false", "image": "img/chromajs.png"},

 {"name" : "I Want Hue", "language": "HTML","popular":"false","new":"true","real-time": "false",
"SVG":"false", "spatial": "false", "network": "false", "color":"true","data-focused":"false",
"financial-focused":"false","image": "img/iwanthue.png"},

 {"name" : "Processing", "language": "Java","popular":"true","new":"false","real-time": "false",
"SVG":"true", "spatial": "true", "network": "true", "color":"true","data-focused":"true",
"financial-focused":"false", "image": "img/processing.png"},

 {"name" : "Procesing.js", "language": "Javascript","popular":"false","new":"false","real-time": "false",
"SVG":"true", "spatial": "true", "network": "true", "color":"true","data-focused":"true",
"financial-focused":"false", "image": "img/processingjs.png"},

 {"name" : "Sigma.js", "language": "Javascript","popular":"true","new":"true","real-time": "false",
"SVG":"false", "spatial": "true", "network": "true", "color":"false","data-focused":"true",
"financial-focused":"true", "image": "img/sigmajs.png"},
    
  ];

    $scope.visuals = [
    
    {"name" : "VISUAL1", "language": "Javascript","popular":"true","new":"false","real-time": "false",
"SVG":"true", "spatial": "true", "network": "true", "color":"true","data-focused":"true",
"financial-focused":"false", "image": "img/d3js.png"},

    {"name" : "VIS 2", "language": "Javascript","popular":"true","new":"true","real-time": "false",
"SVG":"false", "spatial": "true", "network": "false", "color":"true","data-focused":"false",
"financial-focused":"false", "image": "img/chromajs.png"},

 {"name" : "VISUAL 3", "language": "HTML","popular":"false","new":"true","real-time": "false",
"SVG":"false", "spatial": "false", "network": "false", "color":"true","data-focused":"false",
"financial-focused":"false","image": "img/iwanthue.png"},

 {"name" : "Visual 4", "language": "Java","popular":"true","new":"false","real-time": "false",
"SVG":"true", "spatial": "true", "network": "true", "color":"true","data-focused":"true",
"financial-focused":"false", "image": "img/processing.png"},

 {"name" : "Visual 5", "language": "Javascript","popular":"false","new":"false","real-time": "false",
"SVG":"true", "spatial": "true", "network": "true", "color":"true","data-focused":"true",
"financial-focused":"false", "image": "img/processingjs.png"},

 {"name" : "Visual 6", "language": "Javascript","popular":"true","new":"true","real-time": "false",
"SVG":"false", "spatial": "true", "network": "true", "color":"false","data-focused":"true",
"financial-focused":"true", "image": "img/sigmajs.png"},
    
  ];

 $scope.itemID = $routeParams.itemID;

  $scope.searchMethod = "";
// by default filter by query
// FILTERS
var javascriptFilter = { "language": "Javascript" };
var popularFilter = { "popular": "true" };
var newFilter = { "new": "true" };
var realtimeFilter = { "real-time": "true" };
var svgFilter= { "SVG": "true" };
var spatialFilter = { "spatial": "true" };
var networkFilter = { "network": "true" };
var colorFilter = { "color": "true" };
var dataFocusedFilter = { "data-focused": "true" };
var financialFocusedFilter = { "financial-focused": "true" };


// FILTER TRIGGERS
$scope.filterByJavascript = function(item) { 
	return $scope.searchMethod = javascriptFilter;
  console.log("filtering by Javascript");
  }
$scope.filterByPopularity = function() { 
	$scope.searchMethod = popularFilter;
  }
$scope.filterByNew = function() { 
	$scope.searchMethod = newFilter;
  }
  $scope.filterByRealtime = function() { 
	$scope.searchMethod = realtimeFilter;
  }
  $scope.filterBySVG = function() { 
	$scope.searchMethod = svgFilter;
  }
  $scope.filterBySpatial = function() { 
	$scope.searchMethod = spatialFilter;
  }
  $scope.filterByNetwork = function() { 
	$scope.searchMethod = networkFilter;
  }
  $scope.filterByColor = function() { 
	$scope.searchMethod = colorFilter;
  }
  $scope.filterByDataFocused = function() { 
	$scope.searchMethod = dataFocusedFilter;
  }
  $scope.filterByFinancial = function() { 
	$scope.searchMethod = financialFocusedFilter;
  }


  $scope.visualActive = function() { 
     document.getElementById("visuals-container").style.width="80%"
     document.getElementById("frameworks-container").style.width="20%"
  }

    $scope.frameworkActive = function() { 
     document.getElementById("frameworks-container").style.width="78%"
     document.getElementById("visuals-container").style.width="22%"
  }


  }]);


