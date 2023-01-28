import prisma from "../config/database.js";

async function getSeries() {
    return await prisma.series.findMany()
};

async function getSerie (id: number) {
  const serie = await prisma.series.findFirst({
    where:{
    id: id
  }})
  return serie;
};

async function createSerie (nameSeries: string, description: string, genre: string,  streaming: string) {
    const newSerie = await prisma.series.create({
        data: {
        nameSeries,
        description,
        genre, 
        streaming
       }
    })
};
async function getExistingSeries(nameSeries: string) {
  const serie = await prisma.series.findFirst({
    where:{
      nameSeries: nameSeries
    }
  })
  return serie
}

const serieRepository = {
   getSeries,
   getSerie,
   createSerie,
   getExistingSeries
};

export default serieRepository;