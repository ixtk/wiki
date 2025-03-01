import { Outlet } from "react-router"

export const RootLayout = () => {
  return (
    <div className="container">
      <aside>
        <h1>Wiki 📔</h1>
        <form role="search">
          <input name="search" type="search" placeholder="Search" />
        </form>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Create new</a>
            </li>
            <li>
              <a href="#">Bookmarks</a>
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
