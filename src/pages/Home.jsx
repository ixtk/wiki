import { useState, useEffect } from "react"
import { WikiLinks } from "../WikiLinks"

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "Home | Wiki"

    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/entries")
      setPosts(await response.json())
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Available entries</h2>
      {loading ? <p>Loading...</p> : <WikiLinks entries={posts} />}
    </div>
  )
}
