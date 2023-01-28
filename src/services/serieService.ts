import seriesRepository from "../repository/series.repository.js";

async function getSeries() {
    const series = await seriesRepository.getSeries();
    return series;
};

async function getSerie(id: number) {
    const serie = await seriesRepository.getSerie(id);
    if (!serie) {
      throw ("Essa serie não existe");
    }
    return serie;
};

async function postSerie (nameSeries: string, description: string, genre: string, streaming: string) {
   const serie = await seriesRepository.getExistingSeries(nameSeries) 

   if (serie) {
    throw (`Serie with name ${nameSeries} already registered.`)
  }
   
  const newSerie = await seriesRepository.createSerie(nameSeries, description, genre, streaming)
   return newSerie
}

const seriesService = {
    getSeries,
    getSerie,
    postSerie
}

export default seriesService