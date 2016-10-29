import React from 'react';
import { Link } from 'react-router';

class FooterNav extends React.Component {
	render() {
		return (
      <nav className="footer-nav">
        <div className="footer-btn"><Link to="/home"></Link></div>
        <div className="footer-btn"><Link to="/friends"></Link></div>
        <div className="footer-btn"><Link to="/Leaderboard"></Link></div>
      </nav>
		);
	}
}

export default FooterNav;
