angular.module('hateAngular')
	.controller('HateController', HateController);

HateController.$inject = ['$http'];

function HateController($http) {
	var self = this;

  self.addHate = addHate;
  self.newHate = {};
  self.getHate = getHate;
  self.deleteHate = deleteHate;
}