
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Layout() {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();

  return (
    <>
      <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 p-4">
          <span className="mr-auto text-lg font-semibold">
            frontend-lab
          </span>

          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>

          <NavLink to="/users" className="hover:text-blue-500">
            Users
          </NavLink>

          {user ? (
            <button onClick={logout}>
              Logout ({user.name})
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}

          <button
            onClick={toggle}
            className="rounded border px-3 py-1"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-4 md:p-8">
        <Outlet />
      </main>
    </>
  );
}
