var state = function () {
    this.x = null;
    this.player = new person();
    this.guards = [];
    this.last = [];//depth of parent state, index of parent state, action performed

    this.save = function (last) {
        this.x = x; 
        this.player = JSON.parse(JSON.stringify(player));
        this.guards = JSON.parse(JSON.stringify(guards));
        this.last = last;
        return this
    }

    this.load = function () {
        x = this.x;
        player = JSON.parse(JSON.stringify(this.player));
        guards = JSON.parse(JSON.stringify(this.guards));
    }

    this.score = function () {
        /*var score = this.players[1].y //y coordinates of agent
        xtargets = [wh * (3/8),wh * (5/8)]
        if ( this.players[1].y + wh / 30 < (37/120 * wh) ) {
            if (this.players[1].x > xtargets[1]) {
                score += this.players[1].x - xtargets[1] * 0.95   
            } else if ( this.players[1].x < xtargets[0]) { 
                score += xtargets[0] - this.players[1].x * 0.95
            } 
        }
        else {
            //37/120*wh -- start1
            //wh * (75 / 100) -- start2
            //wh/4 width
            if (players[1].x < wh / 4) {
                score+=wh/4 - players[1].x
            } else if (players[1].x > wh * 0.75) {
                score+=players[1].x - wh*0.75
            } else if (players[1].x <= wh / 2 && players[1].x > 38.5/100*wh ) {
                score += players[1].x - 38.5/100*wh
            } else if (players[1].x >= wh / 2 &&  players[1].x < 127/200*wh ) {
                score += 127/200*wh - players[1].x
            }
            score *= 1.5
        }
        if ( Math.abs(this.players[1].xspeed) < 1e-10 && Math.abs(this.players[1].yspeed) < 1e-10 )  {
            score *= 2
        }
       
        return score*/
    }    
}

agent =  {

}

agent.up = function () {
    // if ( players[1].yspeed/(wh/200) >= -1) {
    //     players[1].yspeed-=(wh/200)
    //     return true
    // }

}
agent.down = function () {
    // if ( players[1].yspeed/(wh/200) <= 1) {
    //     players[1].yspeed+=(wh/200)
    //     return true
    // }

}
agent.left = function () {
    // if ( players[1].xspeed/(wh/200) >= -1) {
    //     players[1].xspeed-=(wh/200)
    //     return true
    // }
}
agent.right = function () {
    // if ( players[1].xspeed/(wh/200) <= 1) {
    //     players[1].xspeed+=(wh/200)
    //     return true
    // }
}
agent.same = function () {
    return true //no change in speed
}

var ai = function () {
    unexplored = [];
    bestunexplored = [];// array of best scores - unchecked
    explored = [];
    best = []; // best scores explored
    unexplored[0] = new State().save();

    explored[0] = unexplored[1];
    for (let option of agent) {
        explored[0].load();
        agent[option]();
        criminal();
        guards();
        let state = new State().save();
        score = state.score();

    }
    /*states = []
    scores = []
    var start = new state();
    start.save();
    states.push([start])
    best = Number.POSITIVE_INFINITY //player will always move and avoid a local minimum
    scores.push([best])
    l = -1
    bestdepth = 0
    for (let j = 0; j < 4; j++) {
        l++;
        states.push([])
        scores.push([])
        for ( let i in states[l] ) {
            //console.log('depth =' + l + 'state = ' + i)
            for (option in agent) {
               states[l][i].load(); //load the variables in this possible node
                if ( agent[option]() ) { //in every possible branch, 
                    
                    let s = new state();//create new state
                    update(true);//update player positions
                    s.save([l,i,option])//save the state
                    states[l+1].push(s);//add to the array
                    scores[l+1].push(s.score() );
                }
            }
            newbest = Math.min(best,...scores[l])
            if ( newbest < best ) {
                best = newbest
                bestdepth = l
            }
        }
    }
    index = scores[bestdepth].indexOf(best)
    while (bestdepth !== 1) {
            index = states[bestdepth][index].last[1];

            bestdepth--;
            
    }
    states[0][0].load();
    action = states[bestdepth][index].last[2];
    agent[option]();
    //states[bestdepth][index].load()

    bestState = states[bestdepth][index] */
}

