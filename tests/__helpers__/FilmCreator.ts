import { faker } from '@faker-js/faker'

import type { Film, FilmDetail } from '@/models/films'

export function FilmCreator(): Film {
  return {
    Title: faker.word.words(),
    Year: faker.number.int({ min: 1900, max: 2024 }).toString(),
    imdbID: `tt${faker.string.numeric(8)}`,
    Poster: faker.internet.url(),
    Type: faker.helpers.arrayElement(['movie', 'series']),
  }
}

export function FilmDetailCreator(): FilmDetail {
  return {
    Title: faker.word.words(),
    Year: faker.number.int({ min: 1900, max: 2024 }).toString(),
    Rated: faker.string.sample(5),
    Released: faker.date.anytime().toString(),
    Runtime: faker.string.alphanumeric(),
    Genre: faker.string.alpha(),
    Director: faker.string.alpha(),
    Writer: faker.string.alpha(),
    Actors: faker.string.alpha(),
    Plot: faker.string.alpha(),
    Language: faker.string.alpha(),
    Country: faker.string.alpha(),
    Awards: faker.string.alpha(),
    Poster: faker.string.alpha(),
    Ratings: [],
    Metascore: faker.string.alpha(),
    imdbRating: faker.string.alpha(),
    imdbVotes: faker.string.alpha(),
    imdbID: faker.string.alpha(),
    Type: 'movie',
    DVD: faker.string.alpha(),
    BoxOffice: faker.string.alpha(),
    Production: faker.string.alpha(),
    Website: faker.string.alpha(),
    Response: faker.string.alpha(),
  }
}
