import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import './Menu.css'
import RightNavBar from '../Menu/RightNavBar/RightNavBar'
import HighlightedLink from '../../components/HighlightedLink/HighlightedLink'

class Menu extends Component {
  state = {
    loggedIn: false,
    role: ''
  }
  componentDidMount = () => {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    const user = localStorage.getItem('user')
    if (user) {
      try {
        const role = JSON.parse(user).role
        this.setState({
          role: role
        })
      } catch (e) {
        this.setState({ role: '' })
      }
    } else {
      this.setState({ role: '' })
    }
  }

  logout = () => {
    localStorage.removeItem('jwtToken')
    window.location = '/'
  }

  goToDriverRegistration = () => {
    this.props.history.push('/register')
  }

  render () {
    const token = localStorage.getItem('jwtToken')
    const { role: userRole } = this.state

    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <a class='navbar-brand' href='#'><Logo /></a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' />
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <Link to='/' className='nav-link '>
                <i className='fas fa-home ' /> Home
              </Link>
            </li>
            {token && userRole === 'admin'
              ? <li className='navbar-item'>
                <Link to='/admin' className='nav-link '>
                  <i class='fas fa-user-cog' /> Admin
                  </Link>
              </li>
              : null}

            <li className='navbar-item'>
              <Link to='/deliveries' className='nav-link'>
                <i className='fas fa-truck' /> Deliveries
              </Link>
            </li>
            {token && userRole === 'driver'
              ? <li className='navbar-item'>
                <Link to='/mydeliveries' className='nav-link'>
                    My deliveries
                  </Link>
              </li>
              : null}
            {!token
              ? <li className='navbar-item'>
                <Link to='/login' className='nav-link'>
                  <i className='fas fa-key' /> Login
                  </Link>
              </li>
              : null}
            {token
              ? <li className='navbar-item'>
                <a className='nav-link' onClick={this.logout}>
                  <i className='fas fa-lock' /> Logout
                  </a>
              </li>
              : null}
            {!token
              ? <li className='navbar-item'>
                <Link to='/register' className='nav-link'>
                  <i className='fas fa-user-plus' /> Register
                  </Link>
              </li>
              : null}
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <RightNavBar />
          </form>
        </div>
      </nav>
    )
  }
}
export default withRouter(Menu)
