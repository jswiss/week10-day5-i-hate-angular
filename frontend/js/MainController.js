angular
  .module("hateAngular")
  .controller("MainController", MainController);

MainController.$inject = ['$resource']
function MainController($resource) {
  var self = this;

	var Hate = $resource('http://localhost:3000/hate/:id', { id: '@_id' });

	self.hates = Hate.query();

  this.selectHate = function(hate, index) {
	  self.activeHateIndex = index;
	  self.selectedHate = Hate.get({ id: character._id });
  };

	this.newHate = {};

	this.saveHate = function() {
		Hate.save(self.newHate, function(hate) {
			self.hates.push(hate);
			self.newHate = {};
		})
	}
}