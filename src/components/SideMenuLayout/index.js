import React, { Component } from 'react'

class SideMenuLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contentOpen: true
    }
  }

  toggleSideMenu = () => {
    this.setState({
      contentOpen: !this.state.contentOpen
    })
  }

  render() {
    const { contentOpen } = this.state

    return (
      <div className="side-menu-layout">
        <div className="main-side">
          <div className="title">Flexbox</div>
          <ul>
            <li>
              <a href="">
                <i className="material-icons">dashboard</i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">insert_chart</i>
                Statistics
              </a>
            </li>
            <li className="active">
              <a href="">
                <i className="material-icons">donut_small</i>
                Milestones
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">bug_report</i>
                Experiments
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">desktop_windows</i>
                Previews
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">insert_drive_file</i>
                Assets
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">settings</i>
                Settings
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">call_made</i>
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className={`main-content ${contentOpen ? 'open' : ''}`}>
          <div className="header">
            <button onClick={this.toggleSideMenu}><i className="material-icons">menu</i></button>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nesciunt accusamus, sequi! Nam sapiente ullam alias, quam iste neque adipisci dolorem, nisi nobis accusantium sit cupiditate natus quis eaque pariatur!
        </div>
      </div>
    )
  }
}

export default SideMenuLayout