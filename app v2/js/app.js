var tttApp = angular.module ('tttApp', []);
tttApp.controller('tttController', function($scope) {
	
	var turn = true;

	// $scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
	// $scope.isXTurn = true;
	// // $scope.makeMove = function (clickedOnindex) {
	// // 	$scope.cells[clickedOnindex] = $scope.isXTurn?"X":"O";
	// // 	$scope.isXTurn = !$scope.isXTurn;
	// };

	$scope.playerTurn = function(r, c)
	{
		if(turn === true)
		{
			$scope.rows[r][c] = 1;	// X
			value = 1;
			turn = false;
		}
		else
		{
			$scope.rows[r][c] = -1;	// O
			value = -1;
			turn = true;
		}
		// Test various win conditions
		if(Math.abs($scope.rows[0][0] + $scope.rows[0][1] + $scope.rows[0][2]) == 3)
			$scope.playerWon("top row", $scope.rows[0][0]);
		if(Math.abs($scope.rows[0][0] + $scope.rows[1][1] + $scope.rows[2][2]) == 3)
			$scope.playerWon("\\", $scope.rows[0][0])
	};

	// Show an alert if one of the tested directions is a win
	$scope.playerWon = function(descrip, player)
	{
		// Some example text that could be shown: "X won by diagonal"
		alert( ((player == 1)?"X" : "O") + " won by " + descrip);
	}

});