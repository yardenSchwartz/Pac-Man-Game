
var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var leftCode;
var rightCode;
var upCode;
var downCode;
var numOfFood;

var slowMonst;
var numberOfSec = 0;

var isEatMadicn;

var isInGame = false;
var firstAngle = 0.15;
var secondAngle = 1.95;
/*End Game: */
var gemeTime;
var loser;
var winner;
var better;

/*candy */
var candy = new Object();
var candyMove;
var isBall;
var isEat;
var lastMove;

var numberOfMonsters;
/**monsters position**/
var monster1;
var monster2;
var monster3;
var monster4;

var lastPosMonster1;
var lastPosMonster2;
var lastPosMonster3;
var lastPosMonster4;

var intervalMonster1;
var intervalMonster2;
var intervalMonster3;
var intervalMonster4;

var lost = 0;

var openGameSound = new Audio('sounds/pacman_beginning.mp3');
var loopGameSound = new Audio('sounds/super-mario.mp3');

var loopBlueMonster = new Audio('sounds/wakka.mp3');
var eatSound = new Audio('sounds/pacman_eat.mp3');
var extraLifeSound = new Audio('sounds/pac_bonus.mp3');
var moveFoodSound = new Audio('sounds/pacman_eatfruit.mp3')

var deathSound;

// $(document).ready(function() {
// 	document.getElementById("start").addEventListener("click", setUpSetting);  
// 	document.getElementById("random").addEventListener("click", setUpSetting);   

// 	context = canvas.getContext("2d");
// 	Start();
// });

function soundOn(){
	loopGameSound.loop = true;
	loopGameSound.play();

	document.getElementById("onSound").style.display = "block";
	document.getElementById("muteSound").style.display = "none";

	
}

function soundOff(){
	loopGameSound.loop = false;
	loopGameSound.pause();
	loopGameSound.currentTime = 0;

	document.getElementById("onSound").style.display = "none";
	document.getElementById("muteSound").style.display = "block";

}

function clearAllIntervals() {
	window.clearInterval(foodInterval);
	window.clearInterval(interval);
	window.clearInterval(intervalMonster1);
	window.clearInterval(intervalMonster2);
	window.clearInterval(intervalMonster3);
	window.clearInterval(intervalMonster4);
	window.clearInterval(timmer);
	isInGame = false;
	loopGameSound.loop = false;
	loopGameSound.pause();
	loopGameSound.currentTime = 0;

}


function startNewGame() {
	clearAllIntervals();
	soundOn();
	readyToGame();
}

function readyToGame() {

	lost = 0;

	isInGame = true;
	// document.getElementById("start").addEventListener("click", setUpSetting);  
	// document.getElementById("random").addEventListener("click", setUpSetting);  
	//*****/
	// lost = 0;
	// if(openGameSound.loop = true){
	// 	openGameSound.loop = false;
	// 	openGameSound.stop();
	// }

	loopGameSound.pause();
	setUpSetting();
	setUpPacmanLose();
	numberOfMonsters = document.getElementById("numberOfMonsters").value;
	context = canvas.getContext("2d");
	// openGameSound = new sound('sounds/pacman_beginning.mp3');
	// openGameSound = new Audio('sounds/pacman_beginning.mp3');
	loopGameSound.loop = true;
	loopGameSound.play();
	Start();
}

function sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function () {
		this.sound.play();
	}
	this.stop = function () {
		this.sound.pause();
	}
}


function setUpPacmanLose() {
	document.getElementById("pacman1").style.display = "block";
	document.getElementById("pacman2").style.display = "block";
	document.getElementById("pacman3").style.display = "block";
	document.getElementById("pacman4").style.display = "block";
	document.getElementById("pacman5").style.display = "block";
	document.getElementById("pacman6").style.display = "none";
}

function setUpSetting() {


	document.getElementById("lblUserName").value = currentLoginUser;//write the current userName
	// document.getElementById("lblDisqualification").value = lost;
	document.getElementById("left-arrow").innerText = ": " + leftChoose;

	document.getElementById("right-arrow").innerText = ": " + rightChoose;
	document.getElementById("up-arrow").innerText = ": " + upChoose;
	document.getElementById("down-arrow").innerText = ": " + downChoose;
	document.getElementById("monster-setting").innerText = document.getElementById("numberOfMonsters").value;
	document.getElementById("firstPoint").style.color = document.getElementById("colorpadfirst").value;

	document.getElementById("secondPoint").style.color = document.getElementById("colorpadsecond").value;
	document.getElementById("thirdPoint").style.color = document.getElementById("colorpadfirstthird").value;
	document.getElementById("totalTime").innerText = document.getElementById("choosenGameTime").value;
	document.getElementById("totalBalls").innerText = document.getElementById("numberOfBalls").value;

}

function Start() {
	board = new Array();
	board = [
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 4],
		[4, 0, 4, 0, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 4],
		[4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4],
		[4, 0, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4],
		[4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4],
		[4, 0, 4, 4, 0, 0, 0, 4, 4, 0, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4],
		[4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4, 4, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
		[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 4],
		[4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 4],
		[4, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4],
		[4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4],
		[4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
	];
	looser = false;
	better = false;
	lblTime.style.color="black";
	slowMonst = false;
	isEatMadicn = false;
	winner = false;
	gameTime = document.getElementById("choosenGameTime").value;
	candy.i = 1;
	candy.j = 1;
	isBall = 0;
	isEat = false;
	board[candy.i][candy.j] = 7;
	shape.i = 29 && shape.j == 5
	board[29][7]=11;
	board[0][7]=11;
	board[29][23]=11;
	board[0][23]=11;
	// candyMove="down";
	score = 0;
	pac_color = "yellow";
	var cnt = 312;
	var food_remain = document.getElementById("numberOfBalls").value;
	numOfFood=food_remain;
	var pacman_remain = 1;
	start_time = new Date();
	var numberOfMonsters = document.getElementById("numberOfMonsters").value;

	/**set monsters positions**/
	initMonstersPodition();

	for (var i = 0; i < 30; i++) {
		// board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 30; j++) {

			if (board[i][j] == 4 || board[i][j] == 3 || board[i][j] == 7) {//do nothing - monster/wall

			}
			else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					let rand = Math.random();
					if (rand >= 0.9) {//25 point
						board[i][j] = 25;
					}
					if (rand < 0.9 && rand >= 0.6) {//15 point
						board[i][j] = 15;
					}
					if (rand >= 0 && rand < 0.6) {//5 point
						board[i][j] = 5;
					}
					food_remain--;


				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;

					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}

	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}


	var emptyCellForMadicn = findRandomEmptyCell(board);
	board[emptyCellForMadicn[0]][emptyCellForMadicn[1]] = 6;
	emptyCellForMadicn = findRandomEmptyCell(board);
	board[emptyCellForMadicn[0]][emptyCellForMadicn[1]] = 99;
	emptyCellForMadicn = findRandomEmptyCell(board);
	board[emptyCellForMadicn[0]][emptyCellForMadicn[1]] = 99;
	emptyCellForMadicn = findRandomEmptyCell(board);
	board[emptyCellForMadicn[0]][emptyCellForMadicn[1]] = 99;
	keysDown = {};
	addEventListener(
		"keydown",
		function (e) {
			let left = leftChoose;
			let right = rightChoose;
			let up = upChoose;
			let down = downChoose;
			let code = e.code
			if (e.code == leftChoose || e.code == rightChoose || e.code == downChoose || e.code == upChoose) {
				keysDown[e.code] = true;
			}
		},
		false
	);
	addEventListener(
		"keyup",
		function (e) {
			if (e.code == leftChoose || e.code == rightChoose || e.code == downChoose || e.code == upChoose) {
				keysDown[e.code] = false;
			}
		},
		false
	);

	window.addEventListener("keydown", function (e) {
		if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);
	foodInterval = setInterval(CandyMove, 90);
	interval = setInterval(UpdatePosition, 120);
	timmer = setInterval(updateTimmer, 250);

	/**create monsters interval according their number**/
	setMonstersInterval();
	

}

function initMonstersPodition() {
	monster1 = { x: 28, y: 1 };
	lastPosMonster1 = { x: 28, y: 1 };
	board[28][1] = 3;
	if (numberOfMonsters >= 2) {
		monster2 = { x: 28, y: 28 };
		lastPosMonster2 = { x: 28, y: 28 };
		board[28][28] = 3;
	}
	if (numberOfMonsters >= 3) {
		monster3 = { x: 1, y: 28 };
		lastPosMonster3 = { x: 1, y: 28 };
		board[1][28] = 3;
	}
	if (numberOfMonsters == 4) {
		monster4 = { x: 1, y: 1 };
		lastPosMonster4 = { x: 1, y: 1 };
		board[1][1] = 3;
	}

}

function CandyMove() {
	if (!isEat) {
		let counter = 0;
		let leftMove = false;
		let rightMove = false;
		let upMove = false;
		let downMove = false;
		let lastMoveIsPossible = true;

		board[candy.i][candy.j] = isBall;


		//up is possible?
		if (candy.j > 0 && board[candy.i][candy.j - 1] != 4) {
			// candy.j--;
			counter++;
			upMove = true;

		}
		else {
			if (lastMove == "up") {
				lastMoveIsPossible = false;
			}
		}
		//down
		if (candy.j < 29 && board[candy.i][candy.j + 1] != 4) {
			// candy.j++;
			counter++;
			downMove = true;
		}
		else {
			if (lastMove == "down") {
				lastMoveIsPossible = false;
			}
		}

		//left
		if (candy.i > 0 && board[candy.i - 1][candy.j] != 4) {
			// candy.i--;
			counter++;
			leftMove = true;
		}
		else {
			if (lastMove == "left") {
				lastMoveIsPossible = false;
			}
		}

		//right
		if (candy.i < 29 && board[candy.i + 1][candy.j] != 4) {
			// candy.i++;
			counter++;
			rightMove = true;

		}
		else {
			if (lastMove == "right") {
				lastMoveIsPossible = false;
			}
		}
		/**************/

		let moveArray = new Array();
		let i = 0;
		if (leftMove) {
			if (lastMove == "right") {
				moveArray[i] = "left";
				i++;
			}
			else {
				moveArray[i] = "left";
				i++;
				moveArray[i] = "left";
				i++;
				moveArray[i] = "left";
				i++;
				moveArray[i] = "left";
				i++;
				counter = counter + 3;
			}
		}
		if (rightMove) {
			if (lastMove == "left") {
				moveArray[i] = "right";
				i++;
			}
			else {
				moveArray[i] = "right";
				i++;
				moveArray[i] = "right";
				i++;
				moveArray[i] = "right";
				i++;
				moveArray[i] = "right";
				i++;
				counter = counter + 3;
			}
		}
		if (upMove) {
			if (lastMove == "down") {
				moveArray[i] = "up";
				i++;
			}
			else {
				moveArray[i] = "up";
				i++;
				moveArray[i] = "up";
				i++;
				moveArray[i] = "up";
				i++;
				moveArray[i] = "up";
				i++;
				counter = counter + 3;
			}

		}
		if (downMove) {
			if (lastMove == "up") {
				moveArray[i] = "down";
				i++;
			}
			else {
				moveArray[i] = "down";
				i++;
				moveArray[i] = "down";
				i++;
				moveArray[i] = "down";
				i++;
				moveArray[i] = "down";
				i++;

				counter = counter + 3;
			}

		}
		if (lastMoveIsPossible == true) {
			moveArray[i] = lastMove;
			moveArray[i + 1] = lastMove;
			moveArray[i + 2] = lastMove;
			moveArray[i + 3] = lastMove;
			moveArray[i + 4] = lastMove;
			moveArray[i + 5] = lastMove;
			moveArray[i + 6] = lastMove;
			conter = counter + 7;
		}

		let index = Math.floor(Math.random() * (counter + 1));

		if (moveArray[index] == "left") {
			candy.i--;
			lastMove = "left";
		}
		if (moveArray[index] == "right") {
			candy.i++;
			lastMove = "right";

		}
		if (moveArray[index] == "up") {
			candy.j--;
			lastMove = "up";
		}
		if (moveArray[index] == "down") {
			candy.j++;
			lastMove = "down";
		}

		if (board[candy.i][candy.j] != 0) {
			isBall = board[candy.i][candy.j];
		}
		else {
			isBall = 0;
		}
		if (board[candy.i][candy.j] == 2) {
			isEat = true;
			score = score + 50;
		}
		else {
			board[candy.i][candy.j] = 7;
			Draw();
		}
	}


}

function setMonstersInterval() {
	intervalMonster1 = setInterval("UpdateMonsterPosition(monster1,lastPosMonster1)", 220);

	if (numberOfMonsters >= 2) {
		intervalMonster2 = setInterval("UpdateMonsterPosition(monster2,lastPosMonster2)", 220);
	}

	if (numberOfMonsters >= 3) {
		intervalMonster3 = setInterval("UpdateMonsterPosition(monster3,lastPosMonster3)", 220);
	}

	if (numberOfMonsters == 4) {
		intervalMonster4 = setInterval("UpdateMonsterPosition(monster4,lastPosMonster4)", 220);
	}
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 29 + 1);
	var j = Math.floor(Math.random() * 29 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 29 + 1);
		j = Math.floor(Math.random() * 29 + 1);
	}
	return [i, j];
}


function GetKeyPressed() {

	if (keysDown[upChoose]) {
		return 1;
	}
	if (keysDown[downChoose]) {
		return 2;
	}
	if (keysDown[leftChoose]) {
		return 3;
	}
	if (keysDown[rightChoose]) {
		return 4;
	}
}

function updateTimmer(){
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	lblTime.value = gameTime-time_elapsed;
	

}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	// lblTime.value = gameTime-time_elapsed;
	var cellHeight = canvas.height / 30;
	var cellWidth = canvas.width / 30;
	for (var i = 0; i < 30; i++) {
		for (var j = 0; j < 30; j++) {
			var start = new Object();
			start.x = i * cellWidth;
			start.y = j * cellHeight;
			let centerX = i * cellWidth + 0.5 * cellWidth;
			let centerY = j * cellHeight + 0.5 * cellHeight;


			/*PACMAN */
			if (board[i][j] == 2) {
				context.beginPath();
				// context.arc(centerY, centerX, 9, 0.15 * Math.PI, 1.95 * Math.PI); // half circle
				context.arc(centerX, centerY, 12, firstAngle * Math.PI, secondAngle * Math.PI); // half circle
				context.lineTo(centerX, centerY);
				context.fillStyle = pac_color; //color
				context.fill();

				context.arc(centerX, centerY, 12, firstAngle * Math.PI, secondAngle * Math.PI); // half circle
				context.lineWidth = 1;
				context.strokeStyle = "black";
				context.stroke();

				context.beginPath();
				if (firstAngle == 1.6) {//up
					context.arc(centerX - 7, centerY - 6, 1.5, 0, 2 * Math.PI); // circle

				}
				else {
					if (firstAngle == 0.7) {//down
						context.arc(centerX + 4, centerY - 2, 1.5, 0, 2 * Math.PI); // circle

					}
					else {
						context.arc(centerX + 1, centerY - 6, 1.5, 0, 2 * Math.PI); // circle
					}
				}

				context.fillStyle = "black"; //color
				context.fill();
			} else

				/*Balls*/
				if (board[i][j] == 5) {
					context.beginPath();
					context.arc(centerX, centerY, 5, 0, 2 * Math.PI); // circle
					context.fillStyle = document.getElementById("colorpadfirst").value;


					context.arc(centerX, centerY, 5, 0, 2 * Math.PI); // circle
					context.lineWidth = 2;
					context.strokeStyle = document.getElementById("colorpadfirst").value;

					context.shadowColor = document.getElementById("colorpadfirst").value;
					context.shadowBlur = 50;
					context.shadowOffsetX = 0;
					context.shadowOffsetY = 0;

					context.stroke();

					context.fill();
					context.shadowBlur = 0;
					context.shadowOffsetX = 0;
					context.shadowOffsetY = 0;
					
				}

			if (board[i][j] == 15) {
				context.beginPath();
				context.arc(centerX, centerY, 8, 0, 2 * Math.PI); // circle
				context.fillStyle = document.getElementById("colorpadsecond").value;
				context.fill();
			
			}
			if (board[i][j] == 25) {
				context.beginPath();
				context.arc(centerX, centerY, 10, 0, 2 * Math.PI); // circle
				context.fillStyle = document.getElementById("colorpadfirstthird").value;
				context.fill();
			}
			/*Walls*/
			else
				if (board[i][j] == 4) {
					context.beginPath();
					context.rect(start.x, start.y, cellWidth, cellHeight);
					context.fillStyle = "#030cc2"; //color
					context.fill();
					context.lineWidth = 1;
					context.strokeStyle = "#696969";
					context.strokeRect(start.x, start.y, cellWidth, cellHeight);
				}

			if (board[i][j] == 7) {
				context.beginPath();
				// context.rect(start.x, start.y,cellWidth,cellHeight);

				img = new Image();
				img.src = "images/images-removebg-preview.png";
				context.beginPath();
				context.drawImage(img, start.x, start.y, cellWidth * 1.2, cellHeight * 1.2);
			}

			if (board[i][j] == 6) {
				context.beginPath();
				// context.rect(start.x, start.y,cellWidth,cellHeight);

				im = new Image();
				im.src = "images/pill2.png";
				context.drawImage(im, start.x, start.y, cellWidth * 1.2, cellHeight * 1.2);
			}

			if (board[i][j] == 99) {
				context.beginPath();
				// context.rect(start.x, start.y,cellWidth,cellHeight);

				im = new Image();
				im.src = "images/corona.png";
				context.drawImage(im, start.x, start.y, cellWidth * 1, cellHeight * 1);
			}

		}
	}

	//after all - draw the monsters
	drawMonsters();
}


function drawMonsters() {
	var cellHeight = canvas.height / 30;
	var cellWidth = canvas.width / 30;
	/******for slow motion:****** */
	var blueImage = new Image();
	blueImage.src = "images/blueMonst.png";


	if (slowMonst) {
		context.drawImage(blueImage, monster1.x * cellWidth, monster1.y * cellHeight, cellWidth, cellHeight);
	}
	else {
		var image = document.getElementById("monster-img");
		context.drawImage(image, monster1.x * cellWidth, monster1.y * cellHeight, cellWidth, cellHeight);

	}
	if (numberOfMonsters >= 2) {
		if (slowMonst) {
			context.drawImage(blueImage, monster2.x * cellWidth, monster2.y * cellHeight, cellWidth, cellHeight);
		}
		else {
			var image = document.getElementById("monster2-img");
			context.drawImage(image, monster2.x * cellWidth, monster2.y * cellHeight, cellWidth, cellHeight);
		}
	}

	if (numberOfMonsters >= 3) {
		if (slowMonst) {
			context.drawImage(blueImage, monster3.x * cellWidth, monster3.y * cellHeight, cellWidth, cellHeight);
		}
		else {
			var image = document.getElementById("monster3-img");
			context.drawImage(image, monster3.x * cellWidth, monster3.y * cellHeight, cellWidth, cellHeight);

		}

	}

	if (numberOfMonsters == 4) {
		if (slowMonst) {
			context.drawImage(blueImage, monster4.x * cellWidth, monster4.y * cellHeight, cellWidth, cellHeight);
		}
		else {
			var image = document.getElementById("monster4-img");
			context.drawImage(image, monster4.x * cellWidth, monster4.y * cellHeight, cellWidth, cellHeight);

		}
	}
}



function bestMove(monster, lastPosition) {
	let up;
	let down;
	let left;
	let right;

	//up
	if (board[monster.x][monster.y - 1] != 4 && (lastPosition.y + 1 != monster.y)) {
		let deltaX = Math.abs((monster.x) - shape.i);
		let deltaY = Math.abs((monster.y - 1) - shape.j);
		up = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else {
		//wall
		up = Infinity;
	}

	//down
	if (board[monster.x][monster.y + 1] != 4 && (lastPosition.y - 1 != monster.y)) {
		let deltaX = Math.abs(monster.x - shape.i);
		let deltaY = Math.abs((monster.y + 1) - shape.j);
		down = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else {
		//wall
		down = Infinity;
	}

	//left
	if (board[monster.x - 1][monster.y] != 4 && (lastPosition.x + 1 != monster.x)) {
		let deltaX = Math.abs((monster.x - 1) - shape.i);
		let deltaY = Math.abs(monster.y - shape.j);
		left = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else {
		//wall
		left = Infinity;
	}

	//right
	if (board[monster.x + 1][monster.y] != 4 && (lastPosition.x - 1 != monster.x)) {
		let deltaX = Math.abs((monster.x + 1) - shape.i);
		let deltaY = Math.abs(monster.y - shape.j);
		right = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else {
		//wall
		right = Infinity;
	}


	let rand = Math.floor(Math.random() * 9 + 1);

	if (rand <= 8) {
		/**find the minimun dist**/
		let minDist = Math.min(up, down, left, right);
		if (minDist == up) {
			return [monster.x, monster.y - 1];
		}
		else {
			if (minDist == down) {
				return [monster.x, monster.y + 1];
			}
			else {
				if (minDist == left) {
					return [monster.x - 1, monster.y];
				}
				else {
					if (minDist == right) {
						return [monster.x + 1, monster.y];
					}
				}
			}
		}
	}
	else {
		let array = [];
		array[0]=[monster.x, monster.y - 1];
		array[1]=[monster.x, monster.y + 1];
		array[2]=[monster.x - 1, monster.y];
		array[3]=[monster.x + 1, monster.y];

		let temp = array[Math.floor(Math.random()*array.length)];
		while(board[temp[0]][temp[1]]==4){
			temp = array[Math.floor(Math.random()*array.length)];
		}

		return temp;
	
	}
}

function drawDead(ctx) {

	let cellHeight = canvas.height / 30;
	let cellWidth = canvas.width / 30;

	let centerX = shape.i * cellWidth + 0.5 * cellWidth;
	let centerY = shape.j * cellHeight + 0.5 * cellHeight;

	board[shape.i][shape.j] = 0;
	Draw();
	let firstAngle = 1.6;
	let secondAngle = 3.35;

	/**draw the pacman up**/
	context.beginPath();
	// context.arc(centerY, centerX, 9, 0.15 * Math.PI, 1.95 * Math.PI); // half circle
	context.arc(centerX, centerY, 12, firstAngle * Math.PI, secondAngle * Math.PI); // half circle
	context.lineTo(centerX, centerY);
	context.fillStyle = pac_color; //color
	context.fill();

	context.lineWidth = 1;
	context.strokeStyle = "black";
	context.stroke();

	context.beginPath();

	context.arc(centerX - 7, centerY - 6, 1.5, 0, 2 * Math.PI);
	context.fillStyle = "black"; //color
	context.fill();

	board[monster1.x][monster1.y] = 2;

	/**start to desapear**/
	context.beginPath();
	doFor(8, i => {
		a = (i / 8) * Math.PI * 2;

		x = Math.cos(a);
		y = Math.sin(a);
		context.moveTo(shape.i + cellWidth + x * d2, shape.j + ghy + y * d2);
		context.lineTo(shape.i + ghx + x * d1, shape.j + ghy + y * d1);
	})
	ctx.stroke();

}


function catchThePacman(monster) {

	lost = lost + 1;
	deathSound = new sound("sounds/pacman_death.mp3")
	deathSound.play();
	if (lost == 5) {
		document.getElementById("pacman5").style.display = "none"
		monster.x = shape.i;
		monster.y = shape.j;

		board[shape.i][shape.j] = 0;
		Draw();
		clearAllIntervals();
		loser = true;
		endGame();
		// setTimeout(afterHalfSecond, 500);
	}
	else {
		//loseLife
		if (lost == 0) {
			document.getElementById("pacman6").style.display = "none"
		}
		if (lost == 1) {
			document.getElementById("pacman1").style.display = "none"
		}
		else {
			if (lost == 2) {
				document.getElementById("pacman2").style.display = "none"
			}
			else {
				if (lost == 3) {
					document.getElementById("pacman3").style.display = "none"
				}
				else {
					if (lost == 4) {
						document.getElementById("pacman4").style.display = "none"
					}
				}
			}
		}

		score = score - 10;
		initMonstersPodition();
		board[shape.i][shape.j] = 0;
		let emptyCell = findRandomEmptyCell(board);
		shape.i = emptyCell[0];
		shape.j = emptyCell[1];
	}
}

function afterHalfSecond() {
	// run this code half a second after executing run.  
	alert("You lost - try again with new game!");
	// loser = true;
	// endGame();
}

function UpdateMonsterPosition(monster, lastPosition) {
	//what happend after doing the move ?
	if (isPackmanOnManster() == false) {
		let move = bestMove(monster, lastPosition);
		/**update last move**/
		lastPosition.x = monster.x;
		lastPosition.y = monster.y;
		/**update last move**/
		monster.x = move[0];
		monster.y = move[1];

		//catch the pacman
		if (board[monster.x][monster.y] == 2 || board[lastPosition.x][lastPosition.y] == 2 || isPackmanOnManster() == true) {
			catchThePacman(monster);
		}
	}
	else {
		catchThePacman(monster);
	}
}


/**pacman**/
function UpdatePosition() {

	//check if current cell is on monster
	if (isPackmanOnManster() == false) {
		if (numberOfSec > 0) {
			numberOfSec--;
		}
		else {
			if (slowMonst) {
				loopBlueMonster.loop = false;
				loopBlueMonster.pause();
				loopGameSound.loop = true;
				loopGameSound.play();
				loopGameSound.currentTime = 0;
				slowMonst = false;
				setMonstersInterval();
			}
		}
		let isMove=false;
		let lasti = shape.i;//col
		let lastj = shape.j;//row
		board[shape.i][shape.j] = 0;
		var x = GetKeyPressed();
		if (x == 1) {//up
			if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
				shape.j--;
				firstAngle = 1.6;
				secondAngle = 3.35;
				isMove=true;
			}
		}
		if (x == 2) {//down
			if (shape.j < 29 && board[shape.i][shape.j + 1] != 4) {
				shape.j++;
				firstAngle = 0.7;
				secondAngle = 2.3;
				isMove=true;

			}
		}
		if (x == 3) {//left
			if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {

				shape.i--;
				firstAngle = 1.1;
				secondAngle = 2.9;
				isMove=true;

			}
		}
		if (x == 4) {//right
			if (shape.i < 29 && board[shape.i + 1][shape.j] != 4) {
				shape.i++;
				firstAngle = 0.15;
				secondAngle = 1.85;
				isMove=true;

			}
		}
		if(x==3&&!isMove)//left
		{
			if(shape.i==0&&shape.j==7){
				shape.i=29;
				firstAngle = 1.1;
				secondAngle = 2.9;
			}
			if(shape.i==0&&shape.j==23){
				shape.i=29;
				firstAngle = 1.1;
				secondAngle = 2.9;
			}
		}

		if (x == 4&&!isMove) {//right
			if (shape.i==29&&shape.j==7) {
				shape.i=0;
				firstAngle = 0.15;
				secondAngle = 1.85;
			}
			if (shape.i==29&&shape.j==23) {
				shape.i=0;
				firstAngle = 0.15;
				secondAngle = 1.85;
			}
		}
		let newi = shape.i;
		let newj = shape.j;

		//lblScore

		if (board[shape.i][shape.j] == 5) {
			eatSound.play();
			score = score + 5;
			numOfFood--;
		}
		if (board[shape.i][shape.j] == 15) {
			eatSound.play();
			score = score + 15;
			numOfFood--;
		}
		if (board[shape.i][shape.j] == 25) {
			eatSound.play();
			score = score + 25;
			numOfFood--;
		}


		document.getElementById("lblScore").value = score;

		if (board[shape.i][shape.j] == 7) {
			moveFoodSound.play();
			isEat = true;
			score = score + 50;
		}

		if (board[shape.i][shape.j] == 99) {
			slowMonst = true;
			loopGameSound.loop = false;
			loopGameSound.pause();
			loopGameSound.currentTime = 0;
			loopBlueMonster.loop = true;
			loopBlueMonster.play();
			window.clearInterval(intervalMonster1);
			window.clearInterval(intervalMonster2);
			window.clearInterval(intervalMonster3);
			window.clearInterval(intervalMonster4);
			numberOfSec = 20;
			// UpdateMonsterPosition(true)

		}

		if (board[shape.i][shape.j] == 6) {
			extraLifeSound.play();
			isEatMadicn = true;

			if (lost == 0) {
				document.getElementById("pacman6").style.display = "block";
			}
			if (lost == 1) {
				document.getElementById("pacman1").style.display = "block";
			}
			else {
				if (lost == 2) {
					document.getElementById("pacman2").style.display = "block";
				}
				else {
					if (lost == 3) {
						document.getElementById("pacman3").style.display = "block";
					}
					else {
						if (lost == 4) {
							document.getElementById("pacman4").style.display = "block";
						}
						else {
							if (lost == 5) {
								document.getElementById("pacman5").style.display = "block";

							}
						}
					}
				}
			}

			lost--;
		}

		// setTimeout(afterHalfSecond, 1000);
		if (isPackmanOnManster()) {
			catchThePacman();
		}
		else {
			board[shape.i][shape.j] = 2;
			// setTimeout(afterHalfSecond, 70000);
		}


		if (isPackmanOnManster()) {
			catchThePacman();
		}



	}
	else {
		catchThePacman();
	}


	// var currentTime = new Date();

	// time_elapsed = (currentTime - start_time) / 1000;
	// if (score >= 20 && time_elapsed <= 10) {
	// 	pac_color = "green";
	// }
	// if (score == 50) {
	// 	window.clearInterval(interval);
	// 	window.alert("Game completed");
	// } else {
	if(gameTime - time_elapsed<=60){
		lblTime.style.color="red";
		lblTime.style.size="50px";
	
	}
	if(numOfFood==0&&isEat){
		clearAllIntervals();
		winner = true;
		endGame();
	}
	else{
	if (gameTime - time_elapsed <= 0) {
		// window.clearInterval(interval);
		// window.clearInterval(foodInterval);
		clearAllIntervals();
		if (score < 100) {
			better = true;
		}
		if (score >= 100) {
			winner = true;
		}
		endGame();

	}
	else {
		Draw();
	}
}

	// }
}


function invertColor(hexTripletColor) {
	var color = hexTripletColor;
	color = color.substring(1); // remove #
	color = parseInt(color, 16); // convert to integer
	color = 0xFFFFFF ^ color; // invert three bytes
	color = color.toString(16); // convert to hex
	color = ("000000" + color).slice(-6); // pad with leading zeros
	color = "#" + color; // prepend #
	return color;
}
$(".demo").each(function () {
	var c1 = randomColor();
	var c2 = invertColor(c1);
	$(this).text(c1 + " " + c2).css({
		"color": c1,
		"background-color": c2
	});
});

function endGame() {
	if (loser) {
		document.getElementById("endModal").style.backgroundImage = "url(images/gameOver4.jpg)";
		document.getElementById("titleEnd").innerText = "Loser!";
		document.getElementById("titleEnd").style.color = "white";
		document.getElementById("titleEnd").style.marginLeft = "35%";
		openEndModal();
	}
	if (winner) {
		document.getElementById("endModal").style.backgroundImage = "url(images/winner.jpg)";
		document.getElementById("titleEnd").innerText = "Winner!";
		document.getElementById("titleEnd").style.marginLeft = "30%";
		openEndModal();
	}

	if (better) {
		document.getElementById("endModal").style.backgroundImage = "url(images/pacman4e.webp)";
		document.getElementById("titleEnd").innerText = "You are better than " + score + " points!";
		document.getElementById("titleEnd").style.marginLeft = "20px";
		// document.getElementById("model-body").style.marginBottom="0px";
		document.getElementById("titleEnd").style.color = "white";
		document.getElementById("titleEnd").style.fontSize = "27px";
		// document.getElementById("end-game-btn").style.marginTop="0px";

		//end-game-btn




		openEndModal();
	}

	loopGameSound.loop = false;
	// openGameSound.stop();


}

function backToGame() {
	closeEndModal();
	readyToGame();
}

function isPackmanOnManster() {

	if (board[monster1.x][monster1.y] == 2 || board[lastPosMonster1.x][lastPosMonster1.y] == 2 ||
		(board[shape.i] == lastPosMonster1.x && board[shape.j] == lastPosMonster1.y) ||
		(board[shape.i] == monster1.x && board[shape.j] == monster1.y)) {
		return true;
	}
	if (numberOfMonsters >= 2) {
		if (board[monster2.x][monster2.y] == 2 || board[lastPosMonster2.x][lastPosMonster2.y] == 2 ||
			(board[shape.i] == lastPosMonster2.x && board[shape.j] == lastPosMonster2.y) ||
			(board[shape.i] == monster2.x && board[shape.j] == monster2.y)) {
			return true;
		}
	}

	if (numberOfMonsters >= 3) {
		if (board[monster3.x][monster3.y] == 2 || board[lastPosMonster3.x][lastPosMonster3.y] == 2 ||
			(board[shape.i] == lastPosMonster3.x && board[shape.j] == lastPosMonster3.y) ||
			(board[shape.i] == monster3.x && board[shape.j] == monster3.y)) {
			return true;
		}
	}

	if (numberOfMonsters == 4) {
		if (board[monster4.x][monster4.y] == 2 || board[lastPosMonster4.x][lastPosMonster4.y] == 2 ||
			(board[shape.i] == lastPosMonster4.x && board[shape.j] == lastPosMonster4.y) ||
			(board[shape.i] == monster4.x && board[shape.j] == monster4.y)) {
			return true;
		}
	}

	return false;
}