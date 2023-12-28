import { getServerSession } from '#auth'

const API_URL = process.env.OMDB_API_URL as string
const API_KEY = process.env.OMDB_API_KEY as string

export default eventHandler(async (event) => {
  // const session = await getServerSession(event);

  // if (!session) {
  //   return { status: "unauthenticated!" };
  // }

  const query = getQuery(event)
  const url = new URL(API_URL)
  const searchParams = new URLSearchParams()

  for (const key in query) {
    const value = query[key]?.toString()

    if (value) {
      searchParams.append(key, value)
    }
  }

  searchParams.append('apikey', API_KEY)
  url.search = searchParams.toString()

  return $fetch(url.toString())
})
