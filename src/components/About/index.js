import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className={isDarkTheme === false ? 'light-theme' : 'dark-theme'}>
          <img
            src={
              isDarkTheme === false
                ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            }
            alt="about"
            className="route-img"
          />
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
