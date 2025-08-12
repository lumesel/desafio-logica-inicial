let nome = "Ludev";
let XP = 0;
let levelInicial = "Ferro";


function definirNivel(xp) {
  if (xp < 1000) return "Ferro";
  if (xp < 2000) return "Bronze";
  if (xp < 5000) return "Prata";
  if (xp < 7000) return "Ouro";
  if (xp < 8000) return "Platina";
  if (xp < 9000) return "Ascendente";
  if (xp < 10000) return "Imortal";
  return "Radiante";
}

console.log(`A heroína ${nome} possui ${XP} de XP e iniciou sua jornada no nível ${levelInicial}`);

for (XP = 500; XP <= 9500; XP += 500) {
  let level = definirNivel(XP);
  console.log("Matou um NPC e ganhou 500 de xp.");
  console.log(`Parabéns, você agora possui ${XP} de XP e está no nível ${level}`);
}

let levelFinal = definirNivel(XP);
console.log(`O Herói de ${nome} possui ${XP} de XP e está no nível ${levelFinal}`);
