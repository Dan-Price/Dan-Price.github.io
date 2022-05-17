(function() {
	let start = []
	let speed = 1
	let taps = []
	let canvas = document.querySelector('canvas')
	canvas.addEventListener('touchstart',function (e) {
		if (e.touches.length > 1) {
       		console.log('pause')
       		start = []
       		return
		}
	    let touch = e.touches[0]
		start = [touch.screenX,touch.screenY]
		taps[0] = performance.now()
		//console.log('clicked')
		//console.log(start)
	})
    canvas.addEventListener('touchmove',function (e) {
    	e.preventDefault();
    })
	canvas.addEventListener('touchend',function (e) {
		
		if ( String(start) !== String([]) ) {
            
			let touch = e.changedTouches[0]
			//console.log(touch)
			let end = [touch.screenX,touch.screenY]
			//console.log(start)
			//console.log(end)
			change = [end[0] - start[0], end[1] - start[1] ]
			
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
				taps[1] = performance.now()
				console.log(taps[1] - taps[0])

				console.log(e.changedTouches[0])
				if (taps[1] - taps[0] > 300) {
					speed--
					console.log('slow')
				} else {
					speed++;
					console.log('fast')
				}
				player.xspeed = speed * Math.sign(player.xspeed) * (cellWidth / 25)
				player.yspeed = speed * Math.sign(player.yspeed) * (cellWidth / 25)
			}
		}

		//newSpeed(e)
	})
})()



