var tttApp = angular.module ('tttApp', []);
// What do those brackets do??! Dependencies.  (put a service or factory name in here)
tttApp.controller('tttController', function ($scope) {
	$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
	var gameStatus = true;
	var clickedSpaces = 0;
	$scope.playerOneScore = 0;
	$scope.playerTwoScore = 0;
	// $scope.winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	// we are saying the first move defaults to X because isXTurn = true here

	$scope.isXTurn = true;
	//the makeMove function calls for (clickedOnindex) which is represented in the html with $index. Because  it changees dynamically based on where the user clicks
	
	$scope.makeMove = function (clickedOnindex) {
		console.log(clickedOnindex, gameStatus);
	//$scope.cells[clickedOnindex] = $scope.isXTurn?"X":"O" - this basically asks if XTurn is true mark X if it is not true mark with O
		if (gameStatus == true) {
			// this basically says if the cell is blank alternate between X and O
			// if the cell is filled no not run this function.
			if ($scope.cells[clickedOnindex] === " ") {
		$scope.cells[clickedOnindex] = $scope.isXTurn?"X":"O";
	//this function flips the switch! So if it just marked with an X then the next one will be an O
	// if it just marked with an O it will switch back to X!
		$scope.isXTurn = !$scope.isXTurn;
		clickedSpaces++;
		$scope.winFunction();
	}
	}
	};

	$scope.winFunction = function() {

		if (($scope.cells[0] === "X") && ($scope.cells[1] === "X") && ($scope.cells[2] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[3] === "X") && ($scope.cells[4] === "X") && ($scope.cells[5] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[6] === "X") && ($scope.cells[7] === "X") && ($scope.cells[8] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[0] === "X") && ($scope.cells[3] === "X") && ($scope.cells[6] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[1] === "X") && ($scope.cells[4] === "X") && ($scope.cells[7] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[2] === "X") && ($scope.cells[5] === "X") && ($scope.cells[8] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[0] === "X") && ($scope.cells[4] === "X") && ($scope.cells[8] === "X")) {
			showMessage("X");
		}
			else if (($scope.cells[2] === "X") && ($scope.cells[4] === "X") && ($scope.cells[6] === "X")) {
			showMessage("X");
		}
			
			else if (($scope.cells[0] === "O") && ($scope.cells[1] === "O") && ($scope.cells[2] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[3] === "O") && ($scope.cells[4] === "O") && ($scope.cells[5] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[6] === "O") && ($scope.cells[7] === "O") && ($scope.cells[8] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[0] === "O") && ($scope.cells[3] === "O") && ($scope.cells[6] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[1] === "O") && ($scope.cells[4] === "O") && ($scope.cells[7] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[2] === "O") && ($scope.cells[5] === "O") && ($scope.cells[8] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[0] === "O") && ($scope.cells[4] === "O") && ($scope.cells[8] === "O")) {
			showMessage("O");
		}
			else if (($scope.cells[2] === "O") && ($scope.cells[4] === "O") && ($scope.cells[6] === "O")) {
			showMessage("O");
		}
			else if (clickedSpaces === 9) {
			showMessage("Z");
			 }
			};

	$scope.clearBoard = function () {
		$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
		gameStatus = true;
		clickedSpaces = 0;
		$scope.isXTurn = true;
		document.getElementById('result').style.display = 'none';

	}

	$scope.clearScore = function () {
		$scope.clearBoard();
		$scope.playerOneScore = 0;
		$scope.playerTwoScore = 0;
	}

	$scope.scoreCounter = function () {
		$scope.clearBoard();
		if ($scope.message == "BOOM shakalaka, X WINS!")
			$scope.playerOneScore++;
		else if ($scope.message == "HOOTIE HOO, O WINS!") 
			$scope.playerTwoScore++;
	}

var message = "";

var showMessage = function(player) {
	gameStatus = false;
	if(player == "X")
	{
		message = "BOOM shakalaka, X WINS!";
		$scope.playerOneScore++;
	}
	else if (player == "O")
	{
		message = "HOOTIE HOO, O WINS!";
		$scope.playerTwoScore++;
	}
	else
		message = "MEOW, it's a CATS game";
	document.getElementById('result').style.display = 'block';
	document.getElementById('result').innerHTML = message;
};

});

