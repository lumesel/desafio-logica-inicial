let username = "Ludev"
let levelInicial = "Ferro"
let level = levelInicial
let xp = 0

console.log(`${username} iniciou sua jornada com ${xp} de xp, no nível ${levelInicial}.`)


function getLevel(){
    xp+=500

    if (xp<=1000){
        level = "Ferro"
    } else if (xp <= 2000){
        level = "Bronze"
    } else if (xp <= 5000){
        level = "Prata"
    } else if (xp <= 7000){
        level = "Ouro"
    } else if (xp <= 8000){
        level = "Platina"
    } else if (xp <= 9000){
        level = "Ascendente"
    } else if (xp <= 10000){
        level = "Imortal"
    } else if (xp > 10000){
        level = "Radiante"
    }
}

while (xp<10500){
    getLevel()
    console.log(`${username} matou um NPC e ganhou 500 de xp. Agora possui ${xp} de xp e está no nível ${level}.`)
}

console.log (`A heroína de nome ${username} está no nível ${level}`)
