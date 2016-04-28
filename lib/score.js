angular.module('scoreApp', [])
  .factory('scoreModel', function() {
      return {
        player: 0,
        draw: 0,
        cpu: 0
      }
  })

  .service('scoreService',  ['scoreModel', function(optionsModel) {

    var score = optionsModel;

    this.setScore = function(player) {
      score[player]++;
    }

    this.getScore = function() {
      return score;
    }

  }])

  .controller('scoreController', ['$scope', 'scoreService', function($scope, scoreService) {

    $scope.score = scoreService.getScore();

  }])
