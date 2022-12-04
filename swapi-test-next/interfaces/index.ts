export interface FilmResult {
  properties: IndividualFilm[];
  uid: String;
  message: String;
}
export interface IndividualFilm {
  characters: Array<String>,
  created: String,
  director: String,
  edited: String,
  episode_id: Number,
  opening_crawl: String,
  planets: Array<String>,
  producer: String,
  release_date: String,
  species: Array<String>,
  starships: Array<String>,
  title: String,
  url: String,
  vehicles: Array<String>,
}