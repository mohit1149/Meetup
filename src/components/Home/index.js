import {Link} from 'react-router-dom'
import MainHeading from '../MainHeading'
import RegisterContext from '../../context/RegisterContext'

import {
  HomeImage,
  HomeParagraph,
  HomeBgContainer,
  HomeButton,
  HeadingHome,
  WelcomeParagraph,
  HelloHeading,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, inputName, selectTopic} = value
      return (
        <>
          <MainHeading />
          <HomeBgContainer>
            {isRegistered === true ? (
              <>
                <HelloHeading>Hello {inputName}</HelloHeading>
                <WelcomeParagraph>Welcome to {selectTopic}</WelcomeParagraph>
              </>
            ) : (
              <>
                <HeadingHome>Welcome to Meetup</HeadingHome>
                <HomeParagraph>Please register for the topic</HomeParagraph>
                <Link to="/register">
                  <HomeButton>Register</HomeButton>
                </Link>
              </>
            )}
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeBgContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)
export default Home
