import { useState, useEffect } from "react"
import { WikiLinks } from "../WikiLinks"

export const Bookmarks = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "Bookmarks | Wiki"

    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/entries")
      const json = await response.json()
      setPosts(json.filter((post) => post.bookmarked))
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Bookmarked entries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <WikiLinks entries={posts} />
      ) : (
        <p>No bookmarked topics</p>
      )}
    </div>
  )
}
