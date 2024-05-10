import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <nav className={isDarkTheme === false ? 'light-icon' : 'dark-icon'}>
          <img
            src={
              isDarkTheme === false
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            }
            alt="website logo"
            className="img-style"
          />
          <ul className="options">
            <Link className="option" to="/">
              <li>Home</li>
            </Link>
            <Link className="option" to="/about">
              <li>About</li>
            </Link>
          </ul>
          <button className="button" data-testid="theme" onClick={toggleTheme}>
            <img
              src={
                isDarkTheme === false
                  ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
              }
              alt="theme"
              className="img-style"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
