import React from "react"
import {NavLink} from 'react-router-dom'
import photo from '../media/MyPhoto.JPG'

const NavBar = () => {
    return (
        <div className="Nav">
            <h2 className="title-width text-2">Emily Violet Haynes Portfolio</h2>
            <img className="my-photo" alt="Oh no!" src={photo}/>
            <NavLink className="Navlink-position" to='/' exact><h2 className="Navlink-size text-1">About Me</h2></NavLink>
            <NavLink className="Navlink-position" to='/projects' exact><h2 className="Navlink-size text-1">My Projects</h2></NavLink>
            <NavLink className="Navlink-position" to='/contact' exact><h2 className="Navlink-size text-1">Contact</h2></NavLink>
        </div>
    )
}

export default NavBar;