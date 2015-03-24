/**
	in order to ...
	as a ...
	I need to ...
*/
describe('In order to check password strength as a visitor I need to see strong', function(){
	var upperCaseFilter;

	beforeEach(function(){
		angular.mock.module('angular_test');

		angular.mock.inject(function($filter){
			upperCaseFilter=$filter('upperCase');
		});
	});


	describe('I will test grade method', function(){
		
		it('it should set the letters in the right way', function(){
			expect(upperCaseFilter('toto titi')).toEqual('Toto Titi');
		});
	});
});