import { Routes, Route, Navigate } from "react-router"

import { Home } from "./pages/Home"
import { NewTopic } from "./pages/NewTopic"
import { NotFound } from "./pages/NotFound"
import { SearchResults } from "./pages/SearchResults"
import { Topic } from "./pages/Topic"
import "./App.css"
import { RootLayout } from "./pages/RootLayout"
import { Bookmarks } from "./pages/Bookmarks"

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate to="/entries" />} />
          <Route path="/entries" element={<Home />} />
          <Route path="/entries/:topicId" element={<Topic />} />
          <Route path="/entries/search" element={<SearchResults />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="/entries/new" element={<NewTopic />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
