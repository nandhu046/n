import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className={isDarkTheme === false ? 'light-theme' : 'dark-theme'}>
          <img
            src={
              isDarkTheme === false
                ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            }
            alt="home"
            className="route-img"
          />
          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
