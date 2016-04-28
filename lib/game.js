angular.module('gameApp', ['scoreApp'])
  .factory('optionsModel', function() {
    return {
      rock: {
        name: 'rock',
        image: 'rock.jpg',
        beats: 'scissors'
        },
      paper: {
        name: 'paper',
        image: 'paper.jpg',
        beats: 'rock'
        },
      scissors: {
        name: 'scissors',
        image: 'scissors.jpg',
        beats: 'paper'
        }
    }
  })

  .service('optionsService', ['optionsModel', function(optionsModel) {

    this.getOptions = function() {
      return optionsModel;
    }

  }])

  .controller('gameController', ['$scope', 'optionsService', 'scoreService', function($scope, optionsService, scoreService) {

    var options = optionsService.getOptions();

    $scope.playerPicks = function(playerPick) {

      var cpuPick = cpuPicks();

      if (options[playerPick].beats === cpuPick) recordResult('player');
      else if (options[cpuPick].beats === playerPick) recordResult('cpu');
      else recordResult('draw');
    }

    cpuPicks = function() {
      return Object.keys(options)[Math.floor(Math.random()*3)];
    }

    recordResult = function(result) {
      scoreService.setScore(result);
    }

  }]);
