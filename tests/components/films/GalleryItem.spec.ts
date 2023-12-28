import '@testing-library/jest-dom'

import { test, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { FilmCreator } from '@/tests/__helpers__/FilmCreator'
import userEvent from '@testing-library/user-event'
import GalleryItem from '@/components/films/GalleryItem.vue'

mockNuxtImport('navigateTo', () => {
  return vi.fn()
})

describe.skip('GalleryItem', () => {
  test('should render the component', async () => {
    const film = FilmCreator()

    render(GalleryItem, { props: { film } })

    expect(screen.getByText(film.Title)).toBeDefined()
    expect(screen.getByText(film.Type)).toBeDefined()
    expect(screen.getByAltText(film.Title)).toHaveAttribute('src', film.Poster)
  })

  test('should navigate to detail page on poster click test', async () => {
    const film = FilmCreator()

    render(GalleryItem, { props: { film } })

    userEvent.click(screen.getByAltText(film.Title))

    // expect(navigateToMock).toHaveBeenCalledWith(`/films/${film.imdbID}`);
  })
})
