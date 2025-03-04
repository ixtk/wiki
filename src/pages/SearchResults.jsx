import { useSearchParams } from "react-router"
import { useState, useEffect } from "react"
import { WikiLinks } from "../WikiLinks"

export const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = `Search results | Wiki`

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/entries`)
      const json = await response.json()

      if (searchParams.get("q")) {
        setPosts(
          json.filter((entry) =>
            entry.title.toLowerCase().includes(searchParams.get("q"))
          )
        )
      } else {
        setPosts(json)
      }

      setLoading(false)
    }

    fetchData()
  }, [searchParams])

  return (
    <div>
      <h2>Search results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <WikiLinks entries={posts} />
      ) : (
        <p>No results</p>
      )}
    </div>
  )
}
