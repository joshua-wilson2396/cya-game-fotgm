'use strict'

let hello = document.getElementById('hey-youre-finally-awake')
hello.textContent = `Hey, you're finally awake, get up, they'll be back to kill us soon.`

let statRead = document.getElementById('stat-read')
statRead.textContent = `From the reading I did on you, this is what you're working with. Your HP is ${player.hp}, your XP is ${player.xp}, and your
mana is ${player.mana}.`

let getName = document.getElementById('name')
getName.textContent = "Well, I saved your life, least you could do is tell me your name."
