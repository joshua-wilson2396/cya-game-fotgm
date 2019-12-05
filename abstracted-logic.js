'use strict'
//create the object that PlayerStats will live on 
class PlayerStats {
    constructor (hp, xp, mana) {
        this.hp = hp;
        this.xp = xp;
        this.mana = mana;
    }
} 

//create an instance of player stats
const player = new PlayerStats(100, 0, 25)

//send stat instance to localStorage
localStorage.setItem('newPlayer', JSON.stringify(player))
