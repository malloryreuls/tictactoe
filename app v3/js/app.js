var tttApp = angular.module ('tttApp', ["firebase"]);

	var blankBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

	tttApp.controller('tttController', function ($scope, $firebase) {

		var playerNum;

		var message = "";
		// $scope.winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

		var ticTacRef = new Firebase("https://malloryapp.firebaseio.com/games");
		
			var lastGame;

				ticTacRef.once("value", function(data) {
					var games = data.val(); 
					if (games == null) 
					{
						lastGame = ticTacRef.push({waiting: true});
						playerNum = 1 
					}
					else
					{
						var keys = Object.keys(games); // Get all the text keys
						var lastGameKey = keys[keys.length -1]; // Find the last key
						var lastGame = games[lastGameKey]; // use the last key to get the last game object
					}	
					if (lastGame.waiting == true) 
					{
						lastGame = ticTacRef.child(lastGameKey);
						lastGame.set({
							waiting: false, 
							isXTurn: true, 
							playerOneScore: 0, 
							playerTwoScore: 0, 
							gameStatus: true,
							clickedSpaces: 0,
							cells: blankBoard
						});
						playerNum = 2;
					}
					else 
					{
						lastGame = ticTacRef.push({waiting: true});
						playerNum = 1;
					}
					$scope.game = $firebase(lastGame); 
				});

			$scope.playerTurn = function (){
			    $scope.game.isXTurn;
			    	
			    if(($scope.game.isXTurn == true && playerNum == 1)||( $scope.game.isXTurn == false &&  playerNum == 2))
			    {
			    return true;
			    }
			    else
			    {
			    return false;
			    }
  				};
	
			$scope.makeMove = function (clickedOnindex) {
				if ($scope.playerTurn())
					// (($scope.game.isXTurn == true && playerNum == 1) || ( $scope.game.isXTurn == false &&  playerNum == 2)) 
				{
					if ($scope.game.gameStatus == true) 
					{
						if ($scope.game.cells[clickedOnindex] === " ") {
							$scope.game.cells[clickedOnindex] = $scope.game.isXTurn?"X":"O";
							$scope.game.isXTurn = !$scope.game.isXTurn;
							$scope.game.clickedSpaces++;
							$scope.winFunction();
						}					
					}
				$scope.game.$save();
				}
			};
			
			var isWinCombo = function(cell1, cell2, cell3, player) {
				if (($scope.game.cells[cell1] === player) &&
				    ($scope.game.cells[cell2] === player) && 
				    ($scope.game.cells[cell3] === player)) 
				{
				   	return true;
				} 
				else 
				{
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
					isWinCombo(2, 4, 6, "X")) 
				{
					showMessage("X");
				} 

				else if  (isWinCombo(0, 1, 2, "O") ||
					isWinCombo(3, 4, 5, "O") || 
					isWinCombo(6, 7, 8, "O") ||
					isWinCombo(0, 3, 6, "O") ||
					isWinCombo(1, 4, 7, "O") || 
					isWinCombo(2, 5, 8, "O") ||
					isWinCombo(0, 4, 8, "O") ||
					isWinCombo(2, 4, 6, "O")) 
				{
					showMessage("O");
				} 

				else if ($scope.game.clickedSpaces === 9) 
				{
					showMessage("Z");
				}
			};
				
			$scope.clearBoard = function () {
				$scope.game.cells = blankBoard;
				$scope.game.gameStatus = true;
				$scope.game.clickedSpaces = 0;
				$scope.game.isXTurn = true;
				document.getElementById('result').style.display = 'none';
			}

			$scope.clearScore = function () {
				$scope.clearBoard();
				$scope.game.playerOneScore = 0;
				$scope.game.playerTwoScore = 0;
			};

			$scope.scoreCounter = function () {
				$scope.clearBoard();
				if ($scope.message == "BOOM shakalaka, X WINS!") 
				{
					$scope.game.playerOneScore++;
				}
				else if ($scope.message == "HOOTIE HOO, O WINS!") {
					$scope.game.playerTwoScore++;
				} 		
			};

			$scope.showMessage = function(player) {
				$scope.game.gameStatus = false;
				if(player == "X")
				{
					message = "BOOM shakalaka, X WINS!";
					$scope.game.playerOneScore++;
				}
				else if (player == "O")
				{
					message = "HOOTIE HOO, O WINS!";
					$scope.game.playerTwoScore++;
				}
				else
					message = "MEOW, it's a CATS game";
					document.getElementById('result').style.display = 'block';
					document.getElementById('result').innerHTML = message;
			};

	});

