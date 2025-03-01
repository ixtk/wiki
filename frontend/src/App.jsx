import { Routes, Route } from "react-router"

import { Home } from "./pages/Home"
import { NewTopic } from "./pages/NewTopic"
import { NotFound } from "./pages/NotFound"
import { SearchResults } from "./pages/SearchResults"
import { Topic } from "./pages/Topic"
import "./App.css"
import { RootLayout } from "./pages/RootLayout"

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/entries/:topicId" element={<Topic />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="new" element={<NewTopic />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
