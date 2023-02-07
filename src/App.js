import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfiguratonContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = value => {
    this.setState({showContent: value})
  }

  onToggleShowLeftNavbar = value => {
    this.setState({showLeftNavbar: value})
  }

  onToggleShowRightNavbar = value => {
    this.setState({showRightNavbar: value})
  }

  render() {
    const {showContent, showRightNavbar, showLeftNavbar} = this.state
    return (
      <ConfiguratonContext.Provider
        value={{
          showLeftNavbar,
          showContent,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfiguratonContext.Provider>
    )
  }
}

export default App
