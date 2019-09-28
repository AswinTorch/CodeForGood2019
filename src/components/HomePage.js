import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="wholePage">
      <div className="topNavBar">
        <Link to={'/login'} className="infoButton">LOG IN</Link>
        <Link to={'/signup'} className="infoButton">SIGN UP</Link>
      </div>
      <div className="middleInfo">
        <text className="appName"> Globe Chat </text>
        <text className="teamName"> Team20 </text>
      </div>
      <div className="bottomInfo">
        Global Nomads Group harnesses the power of peer learning, intergroup
        contact theory, and storytelling in order to prepare young people to
        thrive in the 21st Century and lead positive change in their
        communities. Guided by academic research and deep empathy for young
        people’s interests and experiences, GNG’s curriculum leverages
        storytelling and peer learning as the mechanism for helping youth
        develop the knowledge, skills, and attitudes they need to thrive in the
        21st Century. Through sharing stories and building human connections,
        youth are inspired to learn and lead positive change in their
        communities, both local and global, and in ways both large and small.
      </div>
    </div>
  );
}

export default HomePage;
