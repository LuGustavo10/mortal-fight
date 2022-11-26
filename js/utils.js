// Música
const music = new Audio("./music/videoplayback.m4a");

function rectangularCollision({	rectangle1,	rectangle2 }) {
	return (
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >=	rectangle2.position.x 
		&& rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width 
		&& rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y 
		&& rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	)
}

function determineWinner({player, enemy, timerId}) {
	clearTimeout(timerId)
	document.querySelector('#displayText').style.display = 'flex'
	if(player.health === enemy.health){
		document.querySelector('#displayText').innerHTML = 'Empate'
		music.pause()
	} else if (player.health > enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Jogador 1 venceu!'
		music.pause()

	} else if (player.health < enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Jogador 2 venceu!'
		music.pause()
	}
}


// Tempo
let timer = 90
let timerId
function decreaseTimer() {	
	if(timer > 0) {
		music.play()
		timerId = setTimeout(decreaseTimer, 1000)
		timer--
		document.querySelector('#timer').innerHTML = timer
	}

	if(timer === 0) {
		determineWinner({player, enemy, timerId})
	}
}