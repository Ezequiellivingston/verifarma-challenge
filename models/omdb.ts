export type OmdbApiResponse<T> = {
  Response: 'True'
  Search: T[]
  totalResults: string
}

export type OmdbApiResponseError = {
  Response: 'False'
  Error: string
}
