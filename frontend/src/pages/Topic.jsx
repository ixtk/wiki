import { useParams, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"

export const Topic = () => {
  const { topicId } = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [clickCount, setClickCount] = useState(0)

  const deleteTopic = async () => {
    if (clickCount === 0) {
      setClickCount(clickCount + 1)
    } else {
      const response = await fetch(`http://localhost:3000/entries/${topicId}`, {
        method: "DELETE"
      })

      if (response.ok) {
        navigate("/")
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/entries/${topicId}`)
        const json = await response.json()
        setPost(json)
        document.title = `${json.title} | Wiki`
      } catch (error) {
        setError(error.message)
      }

      setLoading(false)
    }

    fetchData()
  }, [topicId])

  if (error) {
    return <p>Something went wrong: {error}</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <Markdown options={{ disableParsingRawHTML: true }}>
          {post.content}
        </Markdown>
      </div>
      <button className="contrast delete-btn" onClick={deleteTopic}>
        {clickCount === 0 ? "Delete" : "Confirm"}
      </button>
    </div>
  )
}
