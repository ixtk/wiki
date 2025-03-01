import { useState } from "react"
import { NavLink, Outlet, useNavigate } from "react-router"

export const RootLayout = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const searchEntry = (event) => {
    event.preventDefault()
    setQuery("")
    navigate(`/search?q=${query}`)
  }

  return (
    <div className="container">
      <aside>
        <h1>Wiki 📔</h1>
        <form onSubmit={searchEntry} role="search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="search"
            type="search"
            placeholder="Search"
          />
        </form>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new">Create new</NavLink>
            </li>
            <li>
              <NavLink to="/bookmarks">Bookmarks</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
