'use strict'
//create the object that PlayerStats will live on 
class PlayerStats {
    constructor (hp, xp, mana, name) {
        this.hp = hp;
        this.xp = xp;
        this.mana = mana;
        this.name = name;
    }
} 

//create an instance of player stats
const player = new PlayerStats(100, 0, 25)

//send stat instance to localStorage
localStorage.setItem('newPlayer', JSON.stringify(player))
