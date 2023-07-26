const Header = ({ currentTab, handleTabChange }) => {
  const handleNavigationClick = (tab) => {
    handleTabChange(tab);
  };

  return (
    <nav className="navbar background">
      <ul className="nav-list">
        <div className="logo"></div>
        <h1>Philipp Winston's Portfolio</h1>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick("Home")}
            className={currentTab === "Home" ? "active" : ""}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick("Portfolio")}
            className={currentTab === "Portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick("Contact")}
            className={currentTab === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavigationClick("Resume")}
            className={currentTab === "Resume" ? "active" : ""}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;