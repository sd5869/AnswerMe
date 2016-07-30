
angular.module('app.controllers', [])
.controller('creditsPageCtrl',['BlankFactory','$scope','$rootScope',function($scope,$rootScope) {
	$rootScope.showAnswerFlag=$scope.showAnswerFlag;
}])

.controller('cloudTabDefaultPageCtrl',['BlankFactory','$scope','$rootScope',function($scope,$rootScope) {
	$rootScope.showAnswerFlag=$scope.showAnswerFlag;
	$scope.answerFlag=false;
	$scope.answer=null;
	$scope.question=null;
}]);
function run(a,q){
	if (q[q.length-1]!="?")
		ans="Enter a valid quesion.";
	else if(a.length==0)
		ans="Code can't be empty.";
	else{
		var ans=new String(a).toLowerCase();
		var padding = (ans.match(/#/g) || []).length;
		a=ans.split('')
		ans=ans.split('')
		console.log(padding)
		if (padding==0){
			ans="Your act of acting smart has completely failed.";
		}
		else if(padding<=3){
			for (var i = a.length - 1; i >= 0; i--) {
				if (a[i]==' '){
					continue;
				}
				else if (a[i]=='a'){
					ans[i]=String.fromCharCode('z'.charCodeAt(0)-padding+1);
				}
				else if(a[i]!=' ' && a[i].charCodeAt(0)>96 && a[i].charCodeAt(0)<123){
					ans[i]=String.fromCharCode(a[i].charCodeAt(0)-padding);
				}
				else if(a[i]=='#'){
					ans[i] = '';
				}
				else {
					console.log(a[i])
					ans = "Special characters or numbers not allowed in code.".split('');
					break;
				}
			}
			ans=ans.join("")
		}
		else{
			ans = "I will not answer as someone is not believing me."
		}
	}
	document.getElementById("oa").innerHTML= ans;
}