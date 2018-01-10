import React, { Component } from 'react'
import withMixer, { Button, Div } from 'react-onclick-mixer'
import MyComponent from './MyComponent'

const Anchor = withMixer('a')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      clicked: false
    }
  }
  render() {
    const { showMenu1, showMenu2, showMenu3, clicked } = this.state

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className={`nav-item dropdown${showMenu1 ? ' show' : ''}`}>
                <Anchor onClick={() => this.setState({showMenu1: !showMenu1})} className="nav-link" href="#">Menu1</Anchor>
                <div className={`dropdown-menu${showMenu1 ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">SubMenu11</a>
                  <a className="dropdown-item" href="#">SubMenu12</a>
                </div>
              </li>
              <li className={`nav-item dropdown${showMenu2 ? ' show' : ''}`}>
                <Button type="button" className="nav-link" onClick={() => this.setState({showMenu2: !showMenu2})}>Menu2</Button>
                <div className={`dropdown-menu${showMenu2 ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">SubMenu21</a>
                  <a className="dropdown-item" href="#">SubMenu22</a>
                </div>
              </li>
              <li className={`nav-item dropdown${showMenu3 ? ' show' : ''}`}>
                <Div className="nav-link" onClick={() => this.setState({showMenu3: !showMenu3})}>Menu3</Div>
                <div className={`dropdown-menu${showMenu3 ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">SubMenu31</a>
                  <a className="dropdown-item" href="#">SubMenu32</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <MyComponent onClick={() => this.setState({clicked: !clicked})} />
        <div>
        {
          clicked ? 'clicked' : 'not clicked'
        }
        </div>
      </div>
    )
  }
}

export default App
