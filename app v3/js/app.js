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

	var isWinCombo = function(cell1, cell2, cell3, player) {
		if (($scope.cells[cell1] === player) &&
		    ($scope.cells[cell2] === player) && 
		    ($scope.cells[cell3] === player)) {
		   	return true;
		} else {
		   	return false;
		}
	};

	$scope.winFunction = function() {
		if  (isWinCombo(0, 1, 2, "X") ||
			isWinCombo(3, 4, 5, "X") || 
			isWinCombo(6, 7, 8, "X") ||
			isWinCombo(0, 3, 6, "X") ||
			isWinCombo(1, 4, 7, "X") || 
			isWinCombo(2, 5, 8, "X") ||
			isWinCombo(0, 4, 8, "X") ||
			isWinCombo(2, 4, 6, "X")) {
			showMessage("X")
		} 

		else if  (isWinCombo(0, 1, 2, "O") ||
			isWinCombo(3, 4, 5, "O") || 
			isWinCombo(6, 7, 8, "O") ||
			isWinCombo(0, 3, 6, "O") ||
			isWinCombo(1, 4, 7, "O") || 
			isWinCombo(2, 5, 8, "O") ||
			isWinCombo(0, 4, 8, "O") ||
			isWinCombo(2, 4, 6, "O")) {
			showMessage("O")
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

