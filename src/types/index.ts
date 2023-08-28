export interface SeriesType {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  totalSeasons: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export interface EpisodeResType {
  Title: string
  Season: string
  totalSeasons: string
  Episodes: EpisodeType[]
  Response: string
}

export interface EpisodeType {
  Title: string
  Released: string
  Episode: string
  imdbRating: string
  imdbID: string
}

export interface EpisodeDetailType extends EpisodeType {
  Year: string
  Rated: string
  Season: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbVotes: string
  seriesID: string
  Type: string
  Response: string
}
