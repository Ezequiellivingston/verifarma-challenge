export function useLoading() {
  function start() {
    if (document.querySelector('.loader-wrapper')) {
      return
    }

    const wrapper = document.createElement('div')
    const loading = document.createElement('span')

    wrapper.appendChild(loading)

    loading.classList.add('loader')
    wrapper.classList.add('loader-wrapper')

    document.body.appendChild(wrapper)
  }

  function end() {
    const loader = document.querySelector('.loader-wrapper')

    if (!loader) {
      return
    }

    document.body.removeChild(loader)
  }

  return {
    start,
    end,
  }
}
