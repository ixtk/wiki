import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export const NewTopic = () => {
  const navigate = useNavigate()
  const [newTopic, setNewTopic] = useState({
    title: "",
    content: ""
  })

  useEffect(() => {
    document.title = "Create New | Wiki"
  }, [])

  const addNewTopic = async (event) => {
    event.preventDefault()

    const response = await fetch("http://localhost:3000/entries", {
      method: "POST",
      body: JSON.stringify(newTopic)
    })

    const json = await response.json()

    if (response.ok) {
      navigate(`/entries/${json.id}`)
    }
  }

  return (
    <>
      <h2>Add a new topic</h2>
      <form onSubmit={addNewTopic} className="new-topic">
        <label>
          Title
          <input
            onChange={(e) =>
              setNewTopic({ ...newTopic, title: e.target.value })
            }
            type="text"
          />
        </label>
        <label>
          Content
          <textarea
            onChange={(e) =>
              setNewTopic({ ...newTopic, content: e.target.value })
            }
            rows={5}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  )
}
