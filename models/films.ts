export type Type = 'movie' | 'series'

export interface Rating {
  Source: string
  Value: string
}

export interface FilmDetail {
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
  Type: Type
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export type Film = Pick<FilmDetail, 'Title' | 'Year' | 'imdbID' | 'Type' | 'Poster'>
