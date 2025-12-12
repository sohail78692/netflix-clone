import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaBell, FaCaretDown, FaSignOutAlt, FaUser, FaCog } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ onSearch, onNavigate, currentPage, user, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        if (!searchQuery) {
          setSearchOpen(false);
        }
      }
      if (!e.target.closest('.navbar-profile')) {
        setShowDropdown(false);
      }
      if (!e.target.closest('.notification-wrapper')) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      onSearch(e.target.value.trim());
    } else {
      onNavigate('home');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchOpen(false);
    onNavigate('home');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tvshows', label: 'TV Shows' },
    { id: 'movies', label: 'Movies' },
    { id: 'new', label: 'New & Popular' },
    { id: 'mylist', label: 'My List' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <img
          className="navbar-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          onClick={() => { handleClearSearch(); onNavigate('home'); }}
        />
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={currentPage === item.id ? 'active' : ''}
              onClick={() => { handleClearSearch(); onNavigate(item.id); }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <form
          className={`search-box ${searchOpen ? 'open' : ''}`}
          onSubmit={handleSearchSubmit}
          ref={searchRef}
        >
          <FaSearch
            className="nav-icon search-icon"
            onClick={() => setSearchOpen(true)}
          />
          {searchOpen && (
            <>
              <input
                type="text"
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              {searchQuery && (
                <span className="clear-search" onClick={handleClearSearch}>
                  ×
                </span>
              )}
            </>
          )}
        </form>

        <div className="notification-wrapper">
          <FaBell
            className="nav-icon"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">Notifications</div>
              <div className="notification-item">
                <img src="https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
                <div className="notification-content">
                  <p>New Arrival: Squid Game Season 2</p>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="notification-item">
                <img src="https://image.tmdb.org/t/p/w92/d5NXSklXo0qyIYkgV94XAgMIckC.png" alt="" />
                <div className="notification-content">
                  <p>Continue Watching: Stranger Things</p>
                  <span>1 week ago</span>
                </div>
              </div>
              <div className="notification-item">
                <img src="https://image.tmdb.org/t/p/w92/uKvVjHNqB5VmOrdxqAt2F7J78ED.png" alt="" />
                <div className="notification-content">
                  <p>New Episodes Available</p>
                  <span>2 weeks ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="navbar-profile" onClick={() => setShowDropdown(!showDropdown)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
          />
          <FaCaretDown className={`dropdown-icon ${showDropdown ? 'rotated' : ''}`} />
          {showDropdown && (
            <div className="profile-dropdown">
              {user && (
                <div className="dropdown-user">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Profile"
                  />
                  <div>
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
              )}
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <FaUser /> <span>Manage Profiles</span>
              </div>
              <div className="dropdown-item">
                <FaCog /> <span>Account Settings</span>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout" onClick={onLogout}>
                <FaSignOutAlt /> <span>Sign Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
