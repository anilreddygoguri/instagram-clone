import { Component } from "react";
import Cookie from "js-cookie";

import { withRouter } from "react-router-dom";
import instagramlogo from "../../images/instagramlogo.png";
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { TbMessageBolt } from "react-icons/tb";
import { MdNotifications } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import Profile from "../../images/profile.jpg";
import { MdOutlineLogout } from "react-icons/md";
import "./index.css";

class Navbar extends Component {
  onClickLogout = () => {
    Cookie.remove("jwt_token");
    const { history } = this.props;
    history.replace("/login");
  };
  render() {
    return (
      <nav className="nav-bar-desktop-container">
        <div className="nav-items-bg-container">
          <div>
            <img src={instagramlogo} className="nav-logo" />
            <div className="nav-list">
              <ul className="nav-items-list">
                <li className="nav-items-container">
                  <TiHome className="nav-icons" />
                  <p className="nav-item-text">Home</p>
                </li>
                <li className="nav-items-container">
                  <IoSearch className="nav-icons" />
                  <p className="nav-item-text">Search</p>
                </li>
                <li className="nav-items-container">
                  <MdOutlineExplore className="nav-icons" />
                  <p className="nav-item-text">Explore</p>
                </li>
                <li className="nav-items-container">
                  <BiSolidVideos className="nav-icons" />
                  <p className="nav-item-text">Reels</p>
                </li>
                <li className="nav-items-container">
                  <TbMessageBolt className="nav-icons" />
                  <p className="nav-item-text">Messages</p>
                </li>
                <li className="nav-items-container">
                  <MdNotifications className="nav-icons" />
                  <p className="nav-item-text">Notifications</p>
                </li>
                <li className="nav-items-container">
                  <MdCreateNewFolder className="nav-icons" />
                  <p className="nav-item-text">Create</p>
                </li>
                <li className="nav-items-container">
                  <img src={Profile} className="profile-image" />
                  <p className="nav-item-text">Anil Goguri</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="logout-container">
            <div className="logout-buttons-container">
              <MdOutlineLogout className="nav-icons more-icon" />
              <button onClick={this.onClickLogout} className="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
