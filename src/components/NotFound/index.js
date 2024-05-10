import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className={isDarkTheme === false ? 'light-theme' : 'dark-theme'}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="route-img"
          />
          <h1>Lost Your Way?</h1>
          <p>We cannot to find the page you are looking for.</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
