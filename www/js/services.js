angular.module('app.services', [])

.factory('BlankFactory', [function(){
	return {
		showAnswerFlag: { value: false }
  }; 
}])

.service('BlankService', [function($scope){
    
}]);

