'use strict'

let hello = document.getElementById('hey-youre-finally-awake')
hello.textContent = `Hey, you're finally awake, get up, they'll be back to kill us soon.`

let statRead = document.getElementById('stat-read')
statRead.textContent = `From the reading I did on you, this is what you're working with. Your HP is ${player.hp}, your XP is ${player.xp}, and your
mana is ${player.mana}.`

let getName = document.getElementById('name')
getName.textContent = "Well, I saved your life, least you could do is tell me your name."

let giveName = document.getElementById('give-name');

giveName.addEventListener('input', (e) => {
    e.preventDefault()
    const playerName = e.target.value
    localStorage.setItem('newPlayerName', JSON.stringify(playerName))
});

let meeting = document.getElementById('pleasure-to-meet');
meeting.textContent = `${JSON.parse(localStorage.getItem('newPlayerName'))}, that's a good name. Come, let's get out of the streets.`;