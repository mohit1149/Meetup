import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputName: '',
    selectTopic: 'Arts and Culture',
    isRegistered: false,
  }

  changeName = inputName => {
    this.setState({inputName})
  }

  changeTopic = selectTopic => {
    this.setState({selectTopic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {inputName, selectTopic, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          inputName,
          selectTopic,
          isRegistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default App
