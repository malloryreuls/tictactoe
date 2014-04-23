var tttApp = angular.module ('tttApp', []);
// What do those brackets do??! Dependencies.  (put a service or factory name in here)
tttApp.controller('tttController', function ($scope) {
	$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
	var gameStatus = true;
	var clickedSpaces = 0;
	// we are saying the first move defaults to X because isXTurn = true here

	$scope.isXTurn = true;
	//the makeMove function calls for (clickedOnindex) which is represented in the html with $index. Because  it changees dynamically based on where the user clicks
	
	$scope.makeMove = function (clickedOnindex) {
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
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[3] === "X") && ($scope.cells[4] === "X") && ($scope.cells[5] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[6] === "X") && ($scope.cells[7] === "X") && ($scope.cells[8] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[0] === "X") && ($scope.cells[3] === "X") && ($scope.cells[6] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[1] === "X") && ($scope.cells[4] === "X") && ($scope.cells[7] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[2] === "X") && ($scope.cells[5] === "X") && ($scope.cells[8] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[0] === "X") && ($scope.cells[4] === "X") && ($scope.cells[8] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			else if (($scope.cells[2] === "X") && ($scope.cells[4] === "X") && ($scope.cells[6] === "X")) {
			gameStatus = false;
			message = "BOOM shakalaka, X WINS!";
			showMessage();}
			
			else if (($scope.cells[0] === "O") && ($scope.cells[1] === "O") && ($scope.cells[2] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[3] === "O") && ($scope.cells[4] === "O") && ($scope.cells[5] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[6] === "O") && ($scope.cells[7] === "O") && ($scope.cells[8] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[0] === "O") && ($scope.cells[3] === "O") && ($scope.cells[6] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[1] === "O") && ($scope.cells[4] === "O") && ($scope.cells[7] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[2] === "O") && ($scope.cells[5] === "O") && ($scope.cells[8] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[0] === "O") && ($scope.cells[4] === "O") && ($scope.cells[8] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (($scope.cells[2] === "O") && ($scope.cells[4] === "O") && ($scope.cells[6] === "O")) {
			gameStatus = false;
			message = "HOOTIE HOO, O WINS!";
			showMessage();}
			else if (clickedSpaces === 9) {
				message = "MEOW, it's a CATS game";
				showMessage();
			 }
			};

var message = "";

var showMessage = function() {
	document.getElementById('result').style.display = 'block';
	document.getElementById('result').innerHTML = message;
};

});

