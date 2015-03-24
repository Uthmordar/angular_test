/**
	in order to ...
	as a ...
	I need to ...
*/
describe('In order to check password strength as a visitor I need to see strong', function(){
	var passwordController;
	var $scope;

	beforeEach(function(){
		angular.mock.module('angular_test');

		angular.mock.inject(function($controller, $rootScope){
			$scope=$rootScope.$new();
			passwordController=$controller('passwordController', {
				$scope: $scope
			});
		});
	});


	describe('I will test grade method', function(){
		
		it('should be the password weak when I type 1234', function(){
			// GIVEN
			$scope.password="1234";
			// AND
			$scope.grade();
			// THEN
			expect($scope.strength).toEqual('weak');
		});

		it('should be the password strong when I type 123456789101112', function(){
			// GIVEN
			$scope.password="123456789101112";
			// AND
			$scope.grade();
			// THEN
			expect($scope.strength).toEqual('strong');
		});
	});
});