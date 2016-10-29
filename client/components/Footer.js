import React from 'react';
import { Link } from 'react-router';

class FooterNav extends React.Component {
	render() {
		return (
      <nav className="footer-nav">
        <Link className="footer-btn" to="/leaderboard"></Link>
        <Link className="footer-btn" to="/home"></Link>
        <Link className="footer-btn" to="/profile"></Link>
      </nav>
		);
	}
}

export default FooterNav;
