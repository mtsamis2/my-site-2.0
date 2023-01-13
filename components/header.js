const Header = () => (
  <header id="header">
      <h1><a href="/">Mike Tsamis</a></h1>
      <nav className="links">
          <ul>
              <li><a href="/categories/raspberry-pi-projects">Raspberry Pi Projects</a></li>
              <li><a href="/categories/software-development">Software Development</a></li>
              <li><a href="/categories/git-faq">Git FAQ</a></li>
              <li><a href="/tools/json-prettify">Tools</a></li>
          </ul>
      </nav>
      {/* TODO: Create a Searchbar component
      <nav className="main">
          <ul>
              <li className="search">
                  <a className="fa-search" href="#search">Search</a>
                  <form id="search" action="https://google.com/search" method="get">
                      <input type="hidden" name="sitesearch" value="miketsamis.com" />
                      <input type="text" name="q" placeholder="Search" />
                  </form>
              </li>
          </ul>
      </nav>
    */}
  </header>
)

export default Header