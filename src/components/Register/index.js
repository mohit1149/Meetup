import {Component} from 'react'
import RegisterContext from '../../context/RegisterContext'
import {
  RegisterHeading,
  RegisterBgCard,
  RegisterBgContainer,
  RegisterImage,
  RegisterInputContainer,
  RegisterLabel,
  RegisterButton,
  RegisterInput,
  RegisterOption,
  RegisterSelect,
  RegisterParagraph,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    errorType: false,
  }

  render() {
    const {errorType} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            inputName,

            changeName,
            changeTopic,
            registerName,
          } = value

          const submitRegistration = event => {
            event.preventDefault()
            if (inputName !== '') {
              const {history} = this.props
              history.replace('/')
              registerName()
            } else {
              this.setState({errorType: true})
            }
          }

          const onChangeName = event => {
            changeName(event.target.value)
          }

          const onChangeTopic = event => {
            changeTopic(event.target.value)
          }

          return (
            <RegisterBgContainer>
              <RegisterBgCard>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <RegisterInputContainer onSubmit={submitRegistration}>
                  <RegisterHeading>Let Us Join</RegisterHeading>
                  <RegisterLabel htmlFor="yourname">NAME</RegisterLabel>
                  <RegisterInput
                    type="text"
                    placeholder="Your name"
                    id="yourname"
                    onChange={onChangeName}
                  />
                  <RegisterLabel>TOPICS</RegisterLabel>
                  <RegisterSelect onchange={onChangeTopic}>
                    {topicsList.map(eachTopic => (
                      <RegisterOption key={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </RegisterOption>
                    ))}
                  </RegisterSelect>
                  <RegisterButton type="submit">Register Now</RegisterButton>
                  {errorType && (
                    <RegisterParagraph>
                      Please enter your name
                    </RegisterParagraph>
                  )}
                </RegisterInputContainer>
              </RegisterBgCard>
            </RegisterBgContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Register
