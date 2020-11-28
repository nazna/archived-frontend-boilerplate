import Link from 'next/link'

export function TopNav() {
  return (
    <header>
      <h1>frontend-boilerplate</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/todo">
              <a>todo</a>
            </Link>
          </li>
          <li>
            <Link href="/reddit">
              <a>reddit</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
