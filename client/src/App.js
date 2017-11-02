import React, { Component } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ContactUs from './components/Contact-Us/container'
import Login from './components/Auth/container'

import './index.css'
import './grid.css'



class App extends Component {
  constructor() {
    super()
    this.state = ({
      contactShown: false,
      authShown: false,
      bgDisabled: false,
      user: null
    })
    this.toggleAuth = this.toggleAuth.bind(this)
    this.toggleContact = this.toggleContact.bind(this)
    this.setUser = this.setUser.bind(this)
  }


  componentWillMount() {
    this.setUser()
  }


  componentDidUpdate() {
    const scrollbarWidthPx = window.innerWidth - document.body.clientWidth
    const [overflow, marginRight] = this.state.bgDisabled
      ? ['hidden', `${scrollbarWidthPx}px`]
      : ['', '0px']
    Object.assign(document.body.style, { overflow, marginRight })
  }


  setUser() {
    console.log('before finding user: ', this.state.user)
    axios.get('/api/auth/me')
      .then(res => this.setState({ user: res.data || {} }, () => console.log(this.state.user)))
      .catch(err => console.error(err))
  }


  toggleContact() {
    this.setState({
      contactShown: !this.state.contactShown,
      bgDisabled: !this.state.bgDisabled
    })
  }


  toggleAuth() {
    this.setState({
      authShown: !this.state.authShown,
      bgDisabled: !this.state.bgDisabled
    })
  }


  render() {
    const { toggleAuth, setUser, toggleContact } = this
    const authShow = this.state.authShown ? 'popup-show' : ''
    const popupShow = this.state.contactShown ? 'popup-show' : ''

    return (
      <div className="App">
        <Navbar toggleAuth={toggleAuth} />
        <Login isVisible={authShow} closeWindow={toggleAuth} setUser={setUser}/>
        <ContactUs isVisible={popupShow} closeWindow={toggleContact} />
        {
          React.cloneElement(
            this.props.children,
            { toggleContact: toggleContact, toggleAuth: toggleAuth }
          )
        }
        <Footer toggleContact={toggleContact} />
      </div>
    )
  }
}

export default App
