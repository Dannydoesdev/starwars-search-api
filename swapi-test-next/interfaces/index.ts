export interface FilmResult {
  properties: IndividualFilm[];
  uid: string;
  message: string;
}
export interface IndividualFilm {
  characters: Array<string>,
  created: string,
  director: string,
  edited: string,
  episode_id: Number,
  opening_crawl: string,
  planets: Array<string>,
  producer: string,
  release_date: string,
  species: Array<string>,
  starships: Array<string>,
  title: string,
  url: string,
  vehicles: Array<string>,
}