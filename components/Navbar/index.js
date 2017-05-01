import Link from 'next/link'

const Navbar = () => (
  <div>
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
        <Link href="/">
          <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </a>
        </Link>
        <Link href="/">
          <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav-item is-tab is-hidden-mobile">About</a>
        </Link>
        </div>
        <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span>
        <div className="nav-right nav-menu">
        <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
        <a className="nav-item is-tab is-hidden-tablet">About</a>
        <a className="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar