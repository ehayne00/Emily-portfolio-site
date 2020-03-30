import React from "react"
import {NavLink} from 'react-router-dom'
import photo from '../media/MyPhoto.JPG'
import menuicon from '../media/menu.svg'


class NavBar extends React.Component {

    state = {
        sidebarShowing: false
    }

    toggleSidebarShowing = () => {
        this.setState({
            sidebarShowing: !this.state.sidebarShowing
        })
    }

    render () {
    return (
        <div className="Nav">
            <h2 className="title-width text-2 animated fadeInLeft delay-1s">Emily Violet Haynes Portfolio</h2>
            <p className="text-2 title-width2 software-position">Software Engineer</p>
            <img className="my-photo" alt="Oh no!" src={photo}/>
            <img onClick={this.toggleSidebarShowing}className="menuicon" alt="oh no!" src={menuicon}/>
            {this.state.sidebarShowing && (
            <div className="nav-links">
            <h2 onClick={this.toggleSidebarShowing} className="Navlink-size text-2">-<NavLink className="Navlink-position" to='/' exact>About Me</NavLink></h2>
            <h2 onClick={this.toggleSidebarShowing}className="Navlink-size text-2">-<NavLink className="Navlink-position" to='/projects' exact>My Projects</NavLink></h2>
            <h2 onClick={this.toggleSidebarShowing}className="Navlink-size text-2">-<NavLink className="Navlink-position" to='/contact' exact>Contact</NavLink></h2>
            </div>)}
        </div>
    )
    }
}

export default NavBar;