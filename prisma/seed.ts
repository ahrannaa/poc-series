import prisma from "../src/config/database.js";

async function main() {
await prisma.series.createMany({
 data:[
    {
    "nameSeries": "Wandinha",
    "description": "Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos.",
    "genre":"Comédia de terror",
    "streaming": "netflix"
},
   {
    "nameSeries": "Mr.Robot",
    "description": "Elliot é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê em uma encruzilhada quando é recrutado para destruir a firma que ele é pago para proteger.",
    "genre":"Drama",
    "streaming": "prime video"
},
   {
    "nameSeries": "La Casa de Papel",
    "description": "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano.",
    "genre":"Drama Suspense Thriller Assalto Policial",
    "streaming": "netflix"
},
  {
    "nameSeries": "Prison Break",
    "description": "Michael Scofield é um homem desesperado em uma situação desesperada. Seu irmão, Lincoln Burrows, foi condenado por um crime que não cometeu e colocado no corredor da morte. Michael rende um banco para conseguir ser encarcerado junto ao irmão na penitenciária estadual de Fox River.",
    "genre":"Drama",
    "streaming": "disney"
},
  {
    "nameSeries": "The Office",
    "description": "Esta adaptação americana se passa em uma empresa de papel em Scranton, Pensilvânia e tem um estilo de documentário semelhante ao original britânico estrelado por Ricky Gervais.",
    "genre":"Comédia",
    "streaming": "netflix"
},
  {
    "nameSeries": "The Boys",
    "description": "A Terra é habitada por super-heróis que são um inspiração para a humanidade. Porém, esses protetores têm um lado sinistro que a maioria das pessoas desconhece.",
    "genre":"Ação",
    "streaming": "prime video"
},
]
   }) 
}

main()
.then(() => {console.log("Registro feito com sucesso")})
.catch(e => {console.log(e);
 process.exit(1)})
.finally(async() => {await prisma.$disconnect()}) 