import React from 'react'

const RegisterContext = React.createContext({
  inputName: '',
  selectTopic: 'Arts and Culture',
  isRegistered: false,
  changeName: () => {},
  changeTopic: () => {},

  registerName: () => {},
})

export default RegisterContext
