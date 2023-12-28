import type { Film, FilmDetail } from '~/models/films'
import type { OmdbApiResponse, OmdbApiResponseError } from '~/models/omdb'

async function GetFilms({ s, page }: { s: string; page: number }): Promise<OmdbApiResponse<Film>> {
  return $fetch<OmdbApiResponse<Film> | OmdbApiResponseError>('/api/omdb', {
    params: { s, page },
  }).then((res) => {
    if (res.Response === 'True') {
      return res
    }

    if (res.Error === 'Movie not found!' || res.Error === 'Incorrect IMDb ID.') {
      return {
        Response: 'True',
        Search: [],
        totalResults: '0',
      }
    }

    throw Error(res.Error)
  })
}

async function GetFilmById(imdbID: string): Promise<FilmDetail> {
  return $fetch<FilmDetail>('/api/omdb', {
    params: { i: imdbID, Plot: 'full' },
  })
}

export { GetFilms, GetFilmById }
