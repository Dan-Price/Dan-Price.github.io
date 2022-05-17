(function() {
	let start = []
	let speed = 1
	let canvas = document.querySelector('canvas')
	canvas.addEventListener('touchstart',function (e) {
		if (e.touches.length > 1) {
       		console.log('pause')
       		start = []
       		return
		}
	    let touch = e.touches[0]
		start = [touch.screenX,touch.screenY]
		//console.log('clicked')
		//console.log(start)
	})
    canvas.addEventListener('touchmove',function (e) {
    	e.preventDefault();
    })
	canvas.addEventListener('touchend',function (e) {
		
		if ( String(start) !== String([]) ) {
            console.log(1)
			let touch = e.changedTouches[0]
			//console.log(touch)
			let end = [touch.screenX,touch.screenY]
			//console.log(start)
			//console.log(end)
			change = [end[0] - start[0], end[1] - start[1] ]
			console.log(change)
			if (change[1] < 0 && Math.abs(change[1]) > Math.abs(change[0])
			) {
				e.keyCode = 38
				console.log('up')
				player.yspeed = -1 * (cellWidth / 25) * speed
				player.xspeed = 0;
			} else if (change[1] > 0 && Math.abs(change[1]) > Math.abs(change[0])) {
				e.keyCode = 40
				console.log('down')
				player.yspeed = 1 * (cellWidth / 25) * speed
				player.xspeed = 0;

			} else if (change[0] > 0 && change[0] > Math.abs(change[1])) {
				e.keyCode = 37
				console.log('right')
				player.xspeed = (cellWidth / 25) * speed
				player.yspeed = 0;
			} else if (change[0] < 0 && Math.abs(change[0]) > Math.abs(change[1])) {
				e.keyCode = 39
				console.log('left')
				player.xspeed = -1 * (cellWidth / 25) * speed
				player.yspeed = 0;
			} else if (Math.max(...change) === 0 ) {
				console.log(e.changedTouches[0])
				speed ++;
				player.xspeed += Math.sign(player.xspeed) * (cellWidth / 25)
				player.yspeed += Math.sign(player.yspeed) * (cellWidth / 25)
			}
		}

		//newSpeed(e)
	})
})()

