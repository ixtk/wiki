import { Routes, Route } from "react-router"

import { Home } from "./pages/Home"
import { NewTopic } from "./pages/NewTopic"
import { NotFound } from "./pages/NotFound"
import { SearchResults } from "./pages/SearchResults"
import { Topic } from "./pages/Topic"
import "./App.css"

function App() {
  return (
    <>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path=":topicId" element={<Topic />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="new" element={<NewTopic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
