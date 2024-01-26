import { Component } from "react";
import UserStories from "../UserStories";
import Navbar from "../Navbar";
import UserPosts from "../UserPosts";

import "./index.css";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page-bg-container">
        <div className="nav-content">
          <Navbar />
        </div>
        <div className="stories-posts-container">
          <UserStories />
          <UserPosts />
        </div>
      </div>
    );
  }
}
export default HomePage;
